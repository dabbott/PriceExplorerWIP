//
//  ChartView.m
//  PriceExplorer
//
//  Created by Devin Abbott on 6/16/20.
//

#import <Foundation/Foundation.h>

#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(ChartViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(data, NSArray)
RCT_EXPORT_VIEW_PROPERTY(minimumValue, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(maximumValue, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(strokeColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(strokeWidth, CGFloat)

@end
