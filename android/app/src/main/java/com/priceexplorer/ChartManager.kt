package com.priceexplorer

import android.graphics.Color
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class ChartManager : SimpleViewManager<ChartView>() {
    companion object {
        private const val REACT_CLASS = "ChartView"
    }

    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(reactContext: ThemedReactContext): ChartView {
        return ChartView(reactContext)
    }

    @ReactProp(name = "data")
    fun setData(view: ChartView, data: ReadableArray?) {
        data?.let {
            val values = FloatArray(it.size())
            for (i in 0 until it.size()) {
                values[i] = it.getDouble(i).toFloat()
            }
            view.data = normalizeData(values)
            view.invalidate()
        }
    }

    @ReactProp(name = "strokeWidth", defaultFloat = 1f)
    fun setStrokeWidth(view: ChartView, strokeWidth: Float) {
        view.strokeWidth = strokeWidth
        view.invalidate()
    }

    @ReactProp(name = "strokeColor")
    fun setStrokeColor(view: ChartView, strokeColor: String?) {
        view.strokeColor = Color.parseColor(strokeColor ?: "#000000")
        view.invalidate()
    }

    @ReactProp(name = "minimumValue", defaultInt = 0)
    fun setMinimumValue(view: ChartView, minimumValue: Int) {
        view.minimumValue = minimumValue
        view.invalidate()
    }

    @ReactProp(name = "maximumValue", defaultInt = 200)
    fun setMaximumValue(view: ChartView, maximumValue: Int) {
        view.maximumValue = maximumValue
        view.invalidate()
    }
}
