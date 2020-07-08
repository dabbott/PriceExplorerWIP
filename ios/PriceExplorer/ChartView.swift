//
//  ChartView.swift
//  PriceExplorer
//
//  Created by Devin Abbott on 6/16/20.
//

import Foundation
import UIKit

class ChartView: UIView {

  // MARK: Bridged

  @objc var minimumValue: CGFloat = 0

  @objc var maximumValue: CGFloat = 200

  @objc var data: NSArray = [] {
    didSet {
      let rawPoints = data.map({ item in (item as? CGFloat) ?? 0 })

      self.yPoint = normalizeData(rawPoints)
    }
  }

  @objc var strokeWidth: CGFloat = 1 {
    didSet {
      shapeLayer.lineWidth = strokeWidth
    }
  }

  @objc var strokeColor: UIColor = UIColor.black {
    didSet {
      shapeLayer.strokeColor = strokeColor.cgColor
    }
  }

  // MARK: Private

  private let shapeLayer = CAShapeLayer()

  private var yPoint: [CGFloat] = []

  // MARK: Lifecycle

  override init(frame: CGRect) {
    super.init(frame: frame)

    setUp()
  }

  required init?(coder: NSCoder) {
    super.init(coder: coder)

    setUp()
  }

  func setUp() {
    shapeLayer.strokeColor = strokeColor.cgColor
    shapeLayer.lineWidth = strokeWidth
    shapeLayer.fillColor = nil
    shapeLayer.lineCap = .round
    shapeLayer.lineJoin = .round

    layer.addSublayer(shapeLayer)
  }

  override func layoutSubviews() {
    updatePath()
  }

  override func didSetProps(_ changedProps: [String]!) {
    updatePath()
  }

  // MARK: Path & Animation

  private func updatePath() {
    if bounds.height <= 0 { return }

    let nextPath = makePath()

    if shapeLayer.path == nil {
      shapeLayer.path = nextPath
    } else {
      animate(toPath: nextPath)
    }
  }

  func makePath() -> CGPath {
    let path = UIBezierPath()

    if yPoint.count < 2 { return path.cgPath }

    let xStep: CGFloat = bounds.width / CGFloat(yPoint.count - 1)

    let points: [CGPoint] = yPoint.enumerated().map { (x, y) in
      CGPoint(
        x: CGFloat(x) * xStep,
        y: bounds.height * (y - minimumValue) / (maximumValue - minimumValue)
      )
    }

    path.move(to: points[0])

    for point in points[1..<points.count] {
      path.addLine(to: point)
    }

    return path.cgPath
  }

  func animate(toPath: CGPath) {
    let animation = CABasicAnimation(keyPath: "path")

    animation.toValue = toPath
    animation.duration = 0.2
    animation.timingFunction = CAMediaTimingFunction(name: CAMediaTimingFunctionName.easeOut)
    animation.delegate = self
    animation.isRemovedOnCompletion = false
    animation.fillMode = .forwards

    shapeLayer.add(animation, forKey: animation.keyPath)
  }
}

extension ChartView: CAAnimationDelegate {
  func animationDidStop(_ anim: CAAnimation, finished flag: Bool) {
    if let presentationLayer = shapeLayer.presentation() {
      shapeLayer.path = presentationLayer.path
    }
  }
}

/**
 Interpolate or extrapolate data so that we have about 100 points
 */
func normalizeData(_ input: [CGFloat]) -> [CGFloat] {
  let pointCount = 100

  var output: [CGFloat] = []

  if input.isEmpty { return output }

  if input.count > pointCount {
    let ratio = input.count / pointCount

    input.enumerated().forEach({ (offset, point) in
      if (offset % ratio == 0) {
        output.append(point)
      }
    })
  } else {
    let ratio = pointCount / input.count

    input.enumerated().forEach({ (offset, point) in
      for _ in 0..<ratio {
        output.append(point)
      }
    })
  }

  return output
}
