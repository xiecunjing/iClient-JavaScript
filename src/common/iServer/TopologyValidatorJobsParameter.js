import {SuperMap} from '../SuperMap';
import {Util} from '../commontypes/Util';
import {TopologyValidatorRule} from '../REST';
import {OutputSetting} from './OutputSetting';

/**
 * @class SuperMap.TopologyValidatorJobsParameter
 * @category  iServer ProcessingService TopologyValidator
 * @classdesc 拓扑检查分析任务参数类
 * @param {Object} options - 必填参数。<br>
 * @param {string} options.datasetName -数据集名。<br>
 * @param {string} options.datasetTopology -检查对象所在的数据集名称。<br>
 * @param {SuperMap.TopologyValidatorRule} options.rule - 拓扑检查规则。<br>
 * @param {string} options.tolerance - 容限。<br>
 * @param {SuperMap.OutputSetting} options.output - 输出参数设置。<br>
 */
export class TopologyValidatorJobsParameter {

    constructor(options) {
        if (!options) {
            return;
        }
        /**
         * @member {string} SuperMap.TopologyValidatorJobsParameter.prototype.datasetName
         * @description 数据集名。
         */
        this.datasetName = "";

        /**
         * @member {string} SuperMap.TopologyValidatorJobsParameter.prototype.datasetTopology
         * @description 拓扑检查对象所在的数据集名称。
         */
        this.datasetTopology = "";

        /**
         * @member {string} SuperMap.TopologyValidatorJobsParameter.prototype.tolerance
         * @description 容限，指定的拓扑错误检查时使用的容限。
         */
        this.tolerance = "";

        /**
         * @member {SuperMap.TopologyValidatorRule} SuperMap.TopologyValidatorJobsParameter.prototype.rule
         * @description 拓扑检查模式 。
         */
        this.rule = TopologyValidatorRule.REGIONNOOVERLAP;

        /**
         * @member {SuperMap.OutputSetting} SuperMap.TopologyValidatorJobsParameter.prototype.output
         * @description 输出参数设置类
         */
        this.output = null;

        Util.extend(this, options);

        this.CLASS_NAME = "SuperMap.TopologyValidatorJobsParameter";
    }

    /**
     * @function SuperMap.TopologyValidatorJobsParameter.prototype.destroy
     * @description 释放资源，将引用资源的属性置空。
     */
    destroy() {
        this.datasetName = null;
        this.datasetTopology = null;
        this.tolerance = null;
        this.rule = null;
        if (this.output instanceof OutputSetting) {
            this.output.destroy();
            this.output = null;
        }
    }

    /**
     * @function SuperMap.TopologyValidatorJobsParameter.toObject
     * @param {Object} TopologyValidatorJobsParameter -拓扑检查分析任务参数
     * @param {Object} tempObj - 目标对象
     * @description 生成拓扑检查分析任务对象
     */
    static toObject(TopologyValidatorJobsParameter, tempObj) {
        for (var name in TopologyValidatorJobsParameter) {
            if (name === "datasetName") {
                tempObj['input'] = tempObj['input'] || {};
                tempObj['input'][name] = TopologyValidatorJobsParameter[name];
                continue;
            }
            if (name === "output"){
                tempObj['output'] = tempObj['output'] || {};
                tempObj['output'] = TopologyValidatorJobsParameter[name];
                continue;
            }
            tempObj['analyst'] = tempObj['analyst'] || {};
            tempObj['analyst'][name] = TopologyValidatorJobsParameter[name];
        }
    }
}

SuperMap.TopologyValidatorJobsParameter = TopologyValidatorJobsParameter;