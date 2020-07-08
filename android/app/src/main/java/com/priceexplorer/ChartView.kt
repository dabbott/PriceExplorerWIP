package com.priceexplorer

import android.content.Context
import android.graphics.*
import android.util.DisplayMetrics
import android.view.View

class ChartView(context: Context?) : View(context) {
    var strokeWidth = 1f
    var minimumValue = 0
    var maximumValue = 200
    var strokeColor = Color.BLACK
    var data = FloatArray(0)
        set(value) {
            field = normalizeData(value)
        }

    private val stroke = Paint()
    private val metrics: DisplayMetrics = resources.displayMetrics

    override fun draw(canvas: Canvas) {
        super.draw(canvas)

        stroke.strokeWidth = strokeWidth * metrics.density
        stroke.color = strokeColor

        val path = Path()

        if (data.size < 2) return

        val xStep: Float = width / (data.size - 1).toFloat()

        val points = data.mapIndexed { x, y ->
            PointF(
                    x.toFloat() * xStep,
                    height * (y - minimumValue) / (maximumValue - minimumValue)
            )
        }

        path.moveTo(points[0].x, points[0].y)

        for (index in 1 until points.size) {
            path.lineTo(points[index].x, points[index].y)
        }

        canvas.drawPath(path, stroke)
    }

    init {
        stroke.isAntiAlias = true
        stroke.isDither = true
        stroke.style = Paint.Style.STROKE
    }
}

fun normalizeData(input: FloatArray): FloatArray {
    val pointCount: Int = 100

    val output: ArrayList<Float> = ArrayList()

    if (input.isEmpty()) return output.toFloatArray()

    if (input.size > pointCount) {
        var ratio = input.size / pointCount

        input.forEachIndexed { index, point ->
            if (index % ratio == 0) {
                output.add(point)
            }
        }
    } else {
        var ratio = pointCount / input.size

        input.forEach { point ->
            for (i in 0 until ratio) {
                output.add(point)
            }
        }
    }

    return output.toFloatArray()
}