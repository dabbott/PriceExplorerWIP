//
//  ChartViewManager.swift
//  PriceExplorer
//
//  Created by Devin Abbott on 6/16/20.
//

import Foundation

@objc(ChartViewManager)
class ChartViewManager: RCTViewManager {
  override func view() -> UIView! {
    return ChartView(frame: .zero)
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
