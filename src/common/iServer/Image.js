﻿import {SuperMap} from '../SuperMap';
import {UGCSubLayer} from './UGCSubLayer';
import {ServerColor} from './ServerColor';
import {Util} from '../commontypes/Util';
import '../REST';

/**
 * @class SuperMap.Image
 * @category iServer Map Layer
 * @classdesc UGC 影像图层类。
 * @extends {SuperMap.UGCSubLayer}
 * @param {Object} options - 参数。<br>
 * @param {SuperMap.ColorSpaceType} colorSpaceType - 返回影像图层的色彩显示模式。<br>
 * @param {number} brightness - 影像图层的亮度。<br>
 * @param {Array.<number>} displayBandIndexes - 返回当前影像图层显示的波段索引。<br>
 * @param {number} contrast - 影像图层的对比度。<br>
 * @param {boolean} transparent - 是否背景透明。<br>
 * @param {SuperMap.ServerColor} transparentColor - 返回背景透明色。<br>
 * @param {number} transparentColorTolerance - 背景透明色容限。
 */
export class UGCImage extends UGCSubLayer {


    constructor(options) {
        options = options || {};
        super(options);
        /**
         * @member {number} SuperMap.Image.prototype.brightness
         * @description 影像图层的亮度。
         */
        this.brightness = null;

        /**
         * @member {SuperMap.ColorSpaceType} SuperMap.Image.prototype.colorSpaceType
         * @description 返回影像图层的色彩显示模式。
         */
        this.colorSpaceType = null;

        /**
         * @member {number} SuperMap.Image.prototype.contrast
         * @description 影像图层的对比度。
         */
        this.contrast = null;

        /**
         * @member {Array.<number>} SuperMap.Image.prototype.displayBandIndexes
         * @description 返回当前影像图层显示的波段索引。
         */
        this.displayBandIndexes = null;

        /**
         * @member {boolean} SuperMap.Image.prototype.transparent
         * @description 是否背景透明。
         */
        this.transparent = null;

        /**
         * @member {SuperMap.ServerColor} SuperMap.Image.prototype.transparentColor
         * @description 返回背景透明色。
         */
        this.transparentColor = null;

        /**
         * @member {number} SuperMap.Image.prototype.transparentColorTolerance
         * @description 背景透明色容限。
         */
        this.transparentColorTolerance = null;

        this.CLASS_NAME = "SuperMap.Image";
    }

    /**
     * @function SuperMap.Image.prototype.destroy
     * @override
     */
    destroy() {
        super.destroy();
        Util.reset(this);
    }

    /**
     * @function SuperMap.Image.prototype.fromJson
     * @description 将服务端JSON对象转换成当前客户端对象。
     * @param {Object} jsonObject - 要转换的 JSON 对象。
     */
    fromJson(jsonObject) {
        super.fromJson(jsonObject);
        if (this.transparentColor) {
            this.transparentColor = new ServerColor(this.transparentColor.red,
                this.transparentColor.green,
                this.transparentColor.blue);
        }
    }

    /**
     * @function SuperMap.Image.prototype.toServerJSONObject
     * @description 转换成对应的 JSON 格式对象。
     */
    toServerJSONObject() {
        return super.toServerJSONObject();
    }


}

SuperMap.Image = UGCImage;
