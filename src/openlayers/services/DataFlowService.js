import ol from 'openlayers';
import {ServiceBase} from './ServiceBase';
import {DataFlowService as DataFlow} from '@supermap/iclient-common';

/**
 * @class ol.supermap.DataFlowService
 * @category  iServer DataFlow
 * @classdesc 实时数据服务
 * @extends ol.supermap.ServiceBase
 * @example
 *      new ol.supermap.DataFlowService(url)
 *      .queryChart(param,function(result){
 *          //doSomething
 *      })
 * @param {string} url - 与客户端交互的实时数据服务地址。
 * @param {Object} options - 加载实时数据可选参数。
 * @param {string} options.proxy - 服务代理地址。
 * @param {SuperMap.ServerType} [options.serverType=SuperMap.ServerType.ISERVER] - 服务来源 iServer|iPortal|online。
 * @param {boolean} [options.withCredentials=false] - 请求是否携带cookie。
 * @param {Function} options.style - 设置数据加载样式。
 * @param {Function} options.onEachFeature - 设置每个数据加载popup等。
 * @param {Array.<Object>} options.geometry - 设置增添的几何要素对象数组。
 * @param {Object} options.excludeField - 排除字段
 */
export class DataFlowService extends ServiceBase {

    constructor(url, options) {
        super(url, options);
        options = options || {};
        if (options.projection) {
            this.options.prjCoordSys = options.projection;
        }
        ServiceBase.call(this, url, options);
        this.dataFlow = new DataFlow(url, options);
        this.dataFlow.events.on({
            "broadcastSocketConnected": this._defaultEvent,
            "broadcastSocketError": this._defaultEvent,
            "broadcastFailed": this._defaultEvent,
            "broadcastSuccessed": this._defaultEvent,
            "subscribeSocketConnected": this._defaultEvent,
            "subscribeSocketError": this._defaultEvent,
            "messageSuccessed": this._defaultEvent,
            "setFilterParamSuccessed": this._defaultEvent,
            scope: this
        });
    }

    /**
     * @function ol.supermap.DataFlowService.prototype.initBroadcast
     * @description 初始化广播
     * @returns {ol.supermap.DataFlowService}
     */
    initBroadcast() {
        this.dataFlow.initBroadcast();
        return this;
    }

    /**
     * @function ol.supermap.DataFlowService.prototype.broadcast
     * @description 加载广播数据
     * @param {JSON} obj - json格式的要素数据
     */
    broadcast(obj) {
        this.dataFlow.broadcast(obj);
    }

    /**
     * @function ol.supermap.DataFlowService.prototype.initSubscribe
     * @description 初始化订阅数据
     */
    initSubscribe() {
        this.dataFlow.initSubscribe();
        return this;
    }

    /**
     * @function ol.supermap.DataFlowService.prototype.setExcludeField
     * @description 设置排除字段
     * @param {Object} excludeField - 排除字段
     */
    setExcludeField(excludeField) {
        this.dataFlow.setExcludeField(excludeField);
        this.options.excludeField = excludeField;
        return this;
    }

    /**
     * @function ol.supermap.DataFlowService.prototype.setGeometry
     * @description 设置添加的几何要素数据
     * @param {Array<Object>} geometry - 设置增添的几何要素对象数组。
     */
    setGeometry(geometry) {
        this.dataFlow.setGeometry(geometry);
        this.options.geometry = geometry;
        return this;
    }

    /**
     * @function ol.supermap.DataFlowService.prototype.unSubscribe
     * @description 结束订阅数据
     */
    unSubscribe() {
        this.dataFlow.unSubscribe();
    }

    /**
     * @function ol.supermap.DataFlowService.prototype.unBroadcast
     * @description 结束加载广播
     */
    unBroadcast() {
        this.dataFlow.unBroadcast();
    }

    _defaultEvent(e) {
        this.dispatchEvent({type: e.eventType || e.type, value: e});
    }
}
ol.supermap.DataFlowService = DataFlowService;