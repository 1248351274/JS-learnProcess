<template>
  <div class="xbsj-template">

    <div
      class="xbsj-list"
      ref="container"
      @mousedown="startMove($event)"
      @mousemove="onMoving($event)"
      @mouseup="endMove($event)"
    >
      <div class="xbsj-list-item">
        <!-- 视域分析 -->
        <span class="xbsj-list-name">{{lang.visualization}}</span>

        <!-- 通视分析 -->
        <!-- <div class="xbsj-item-btnbox">
          <div class="xbsj-item-btn visibilitybutton"></div>
          <span class="xbsj-item-name">{{lang.visibility}}</span>
        </div>-->
        <!-- 模型压平 -->
        <div class="xbsj-item-btnbox" @click="startFlattenning" title="创建压平面">
          <div class="xbsj-item-btn flattenbutton"></div>
          <span class="xbsj-item-name">{{lang.flatten}}</span>
        </div>
        <!-- 水淹分析 -->
        <!-- <div class="xbsj-item-btnbox">
          <div class="xbsj-item-btn floodingbutton"></div>
          <span class="xbsj-item-name">{{lang.flooding}}</span>
        </div>-->
        <!-- 视频融合 -->
        <div class="xbsj-item-btnbox" @click="startCameraVideo" title="以当前相机姿态创建新的视频融合">
          <div class="xbsj-item-btn videofusionbutton"></div>
          <span class="xbsj-item-name">{{lang.videofusion}}</span>
        </div>
        <!-- 剖切 -->
        <div class="xbsj-item-btnbox" @click="startClipping" title="创建剖切面">
          <div class="xbsj-item-btn sectioningbutton"></div>
          <span class="xbsj-item-name">{{lang.sectioning}}</span>
        </div>
        <!-- 挖坑 -->
        <!-- <div class="xbsj-item-btnbox">
          <div class="xbsj-item-btn potholingbutton"></div>
          <span class="xbsj-item-name">{{lang.potholing}}</span>
        </div>-->
        <!-- 可视域 -->
        <div class="xbsj-item-btnbox ml20" @click="startViewshed" title="以当前相机姿态创建新的视域分析">
          <div class="xbsj-item-btn visualbutton"></div>
          <span class="xbsj-item-name">{{lang.visual}}</span>
        </div>
        <!-- 水面 -->
        <div class="xbsj-item-btnbox" @click="startWater" title="创建水面">
          <div class="xbsj-item-btn waterbutton"></div>
          <span class="xbsj-item-name">{{lang.water}}</span>
        </div>
        <!-- 模型展开 -->
        <div
          class="xbsj-item-btnbox"
          title="模型展开"
          @drop="modelexpansion_drop($event)"
          @dragover="modelexpansion_dragover($event)"
          @dragleave="modelexpansion_dragleave($event)"
        >
          <div class="xbsj-item-btn">
            <button
              class="modelexpansionbutton"
              :disabled="!enabled"
              :class="{highlight:modelexpansion_over}"
              @click="expansionEditor()"
            ></button>
          </div>
          <span class="xbsj-item-name">{{lang.expansion}}</span>
        </div>
        <!-- 挖坑 -->
        <div class="xbsj-item-btnbox ml20" @click="cutSurfaceBtn">
          <div class="xbsj-item-btn cutsurfacebutton"></div>
          <span class="xbsj-item-name">{{lang.cutsurface}}</span>
        </div>
      </div>
      <div class="xbsj-list-item xbsj-list-lastitem">
        <span class="xbsj-list-name">{{lang.measure}}</span>

        <div class="xbsj-item-btnbox ml20" @click="measurementType='POINT'">
          <div
            class="xbsj-item-btn pointbutton"
            :class="measurementType === 'POINT' ? 'pointbuttonActive' : ''"
          ></div>
          <span class="xbsj-item-name">{{lang.point}}</span>
        </div>
        <div class="xbsj-item-btnbox" @click="measurementType='SPACE_DISTANCE'">
          <div
            class="xbsj-item-btn distancebutton"
            :class="measurementType === 'SPACE_DISTANCE' ? 'distancebuttonActive' : ''"
          ></div>
          <span class="xbsj-item-name">{{lang.distance}}</span>
        </div>

        <!-- 贴地距离 -->
        <div class="xbsj-item-btnbox" @click="disGroudMeasure()">
          <div
            class="xbsj-item-btn disGroudbutton"
            :class="measurementType === 'SPACE_DIS_GROUD' ? 'disGroudbuttonActive' : ''"
          ></div>
          <span class="xbsj-item-name">{{lang.disGroud}}</span>
        </div>
        <span
          class="xbsj-select"
          :class="{highlight:popup == 'dis_interpolation'}"
          @click.stop="togglePopup('dis_interpolation',$event)"
        ></span>

        <div class="xbsj-item-btnbox" @click="measurementType='TRIANGLE_DISTANCE'">
          <div
            class="xbsj-item-btn heightbutton"
            :class="measurementType === 'TRIANGLE_DISTANCE' ? 'heightbuttonActive' : ''"
          ></div>
          <span class="xbsj-item-name">{{lang.height}}</span>
        </div>
        <div class="xbsj-item-btnbox" @click="measurementType='SPACE_AREA'">
          <div
            class="xbsj-item-btn areabutton"
            :class="measurementType === 'SPACE_AREA' ? 'areabuttonActive' : ''"
          ></div>
          <span class="xbsj-item-name">{{lang.area}}</span>
        </div>

        <!-- 剖面 -->
        <div class="xbsj-item-btnbox" @click="sectionPlane()">
          <div class="xbsj-item-btn sectionGroudbutton"></div>
          <span class="xbsj-item-name">{{lang.sectionPlane}}</span>
        </div>

        <!-- 贴地面积 -->
        <div class="xbsj-item-btnbox" @click="areaGroudMeasure()">
          <div
            class="xbsj-item-btn areaGroudbutton"
            :class="measurementType === 'SPACE_AREA_GROUD' ? 'areaGroudbuttonActive' : ''"
          ></div>
          <span class="xbsj-item-name">{{lang.areaGroud}}</span>
        </div>
        <span
          class="xbsj-select"
          :class="{highlight:popup == 'interpolation'}"
          @click.stop="togglePopup('interpolation',$event)"
        ></span>

        <!-- 方位角 -->
        <div class="xbsj-item-btnbox" @click="angleMeasure()">
          <div
            class="xbsj-item-btn anglebutton"
            :class="measurementType === 'SPACE_ANGLE' ? 'anglebuttonActive' : ''"
          ></div>
          <span class="xbsj-item-name">{{lang.angle}}</span>
        </div>

        <!-- 通视 -->
        <div class="xbsj-item-btnbox" @click="startIntervisible()">
          <div
            class="xbsj-item-btn intervisiblebutton"
            :class="measurementType === 'SPACE_Intervisible' ? 'intervisiblebuttonActive' : ''"
          ></div>
          <span class="xbsj-item-name">{{lang.intervisible}}</span>
        </div>

        <!-- 圆形通视 -->
        <div class="xbsj-item-btnbox" @click="circleIntervisible()">
          <div
            class="xbsj-item-btn circleIntervisiblebutton"
            :class="measurementType === 'SPACE_Circle_Intervisible' ? 'circleIntervisiblebuttonActive' : ''"
          ></div>
          <span class="xbsj-item-name">{{lang.circleIntervisible}}</span>
        </div>

        <!-- <div class="xbsj-item-btnbox" @click="cutFillEnabled=!cutFillEnabled"> -->
        <div class="xbsj-item-btnbox" @click="cutFillComputingShow=!cutFillComputingShow">
          <div class="xbsj-item-btn volumebutton" :class="{highlight:cutFillComputingShow}"></div>
          <span class="xbsj-item-name">{{lang.volume}}</span>
        </div>
        <div class="xbsj-item-btnbox" @click="clearResults">
          <div class="xbsj-item-btn resetbutton"></div>
          <span class="xbsj-item-name">{{lang.reset}}</span>
        </div>
        <!-- <div class="xbsj-item-btnbox" @click="showgeology">
          <div class="xbsj-item-btn resetbutton"></div>
          <span class="xbsj-item-name">地质</span>
        </div>-->
      </div>
    </div>
    <Interpolation
      ref="interpolation"
      v-show="popup =='interpolation'"
      @changeInterval="changeInterval"
      :interval="areaGroudinterval"
    ></Interpolation>

    <Interpolation
      ref="dis_interpolation"
      v-show="popup =='dis_interpolation'"
      @changeInterval="changeDisInterval"
      :interval="disGroudinterval"
    ></Interpolation>
  </div>
</template>

<script>
import languagejs from "./index_locale";
import Interpolation from "./Interpolation";
import { getPickRay } from "../../../utils/measure";
import { createPolylinePrimitive } from "../../../utils/DepthPolyline";
import { getDisAndLabelPos } from "../../../utils/measure";

export default {
  components: {
    Interpolation
  },
  data () {
    return {
      lang: {},
      measurementType: "NONE",
      cutFillComputingShow: false,
      profileAnalysisShow: false,
      langs: languagejs,
      enabled: false,
      modelexpansion_over: false,
      measuring: false,
      areaGroud: 0,
      areaGroudinterval: 0,
      disGroudinterval: 0,
      popup: "",
      disGroudMeasureing: false
    };
  },
  created () { },
  mounted () {
    this.$nextTick(() => {
      this._disposers = this._disposers || [];
      this._disposers.push(
        XE.MVVM.bind(
          this,
          "measurementType",
          this.$root.$earth.analyzation,
          "measurement.type"
        )
      );
      this._unBinds = [];
      this._unBinds.push(
        XE.MVVM.watch(() => {
          const csn = this.$root.$earth.sceneTree.currentSelectedNode;
          if (csn && csn.czmObject && csn.czmObject instanceof XE.Obj.Tileset) {
            this.setTileset(csn.czmObject);
          } else {
            this.setTileset(undefined);
          }
        })
      );
      this._labels = [];
      this._disGroudLabels = [];
      this._temGeometry = [];
      this._temPrimitive = [];
      this._creating = [];
    });
  },
  beforeDestroy () {
    this._disposers.forEach(d => d());
  },
  watch: {
    measuring (v) {
      if (v == false) {
        if (this.measurementType === "SPACE_Circle_Intervisible") {
          this._circle.positions[0][2] += 0.5;
          for (var i = 0; i < this._circle._polygonPositions.length; i += 3) {
            var pos = this._circle._polygonPositions[i];
            if (pos[2] === this._circle.positions[1][2]) {
              pos[2] = this._circle.positions[0][2];
            }
            this.drawIntervisibleLine(
              this._circle.positions[0],
              pos,
              this._circle
            );
          }
        } else if (this.measurementType === "SPACE_AREA_GROUD") {
          if (this._areaGroud.positions.length > 2) {
            this.areaGroud = this._areaGroud.totalArea;
            if (isNaN(this.areaGroud)) {
              this.areaGroud = 0;
            }
            if (this.areaGroudinterval === 0 && this.areaGroud > 1) {
              this._areaGroud.interpolationDistance =
                Math.sqrt(this.areaGroud) / 10;
              this._areaGroud.offsetHeight = 0.5;
              this._areaGroud.interpolation = true;
            }

            var temPrimitve = new XE.Obj.CustomPrimitive(this.$root.$earth);
            temPrimitve.position = this._areaGroud._customPrimitive.position;
            temPrimitve.positions = this._areaGroud._customPrimitive.positions;
            temPrimitve.primitiveType = 1;
            var indices = [];
            for (
              var i = 0;
              i < this._areaGroud._customPrimitive.indices.length - 2;
              i += 3
            ) {
              var i1 = this._areaGroud._customPrimitive.indices[i];
              var i2 = this._areaGroud._customPrimitive.indices[i + 1];
              var i3 = this._areaGroud._customPrimitive.indices[i + 2];
              indices.push(i1);
              indices.push(i2);
              indices.push(i2);
              indices.push(i3);
              indices.push(i3);
              indices.push(i1);
            }
            temPrimitve.indices = indices;
            this._temGeometry.push(temPrimitve);

            this._labels.forEach(l => l.destroy());
            this._labels = [];
            var lb = this.createLabel({
              pos: this._areaGroud._customPrimitive.position,
              dis: Math.round(this._areaGroud.totalArea * 100) / 100 + "平方米"
            });
            this._labels.push(lb);
          }
        }
        this.updateCreatingBind();
      }
    },
    measurementType (v) {
      if (this._areaGroud && this.measurementType !== "SPACE_AREA_GROUD") {
        this._areaGroud.creating = false;
      }
    },
    disGroudMeasureing (v) {
      if (v === false) {
        this._creating.forEach(d => d());
        this._creating = [];
        let self = this;
        if (this._disGroudLabels.length > 0) {
          this._disGroudLabels.forEach(l => {
            self._temGeometry.push(l);
          });
          this._disGroudLabels = [];
          this.measurementType = "NONE";
        }
      }
    }
  },
  methods: {
    changeInterval (v) {
      this.areaGroudinterval = v;
    },
    changeDisInterval (v) {
      this.disGroudinterval = v;
    },
    getPopupComp () {
      if (this.$refs.hasOwnProperty(this.popup)) {
        return this.$refs[this.popup];
      } else {
        return undefined;
      }
    },
    showPopup (v) {
      let comp = this.getPopupComp();
      if (comp && typeof comp.show == "function") {
        comp.show(v);
      }
      return comp;
    },
    togglePopup (p, event) {
      //调用上一个组件的隐藏
      this.showPopup(false);

      this.popup = this.popup == p ? "" : p;

      //调用当前组件的显示
      let curComp = this.showPopup(true);
      if (!curComp) return;
      if (this.popup == "" || !event) return;
      try {
        //基于现在UI结构强行计算的
        let el = curComp.$el;
        el.style.left =
          event.target.offsetLeft +
          event.target.offsetParent.offsetLeft -
          40 +
          "px";
        el.style.top =
          event.target.offsetTop +
          event.target.offsetParent.offsetTop +
          44 +
          "px";
      } catch (ex) {
        console.log(ex);
      }
    },
    drawIntervisibleLine (p1, p2, obj) {
      var p = getPickRay(p1, p2, this.$root.$earth);
      if (p) {
        var mid = [p.longitude, p.latitude, p.height];
        var line1 = createPolylinePrimitive([[...p1], mid], [0, 1, 0, 1]);
        this.$root.$earth.czm.scene.primitives.add(line1);
        var line2 = createPolylinePrimitive([mid, [...p2]], [1, 0, 0, 1]);
        this.$root.$earth.czm.scene.primitives.add(line2);

        this._temPrimitive.push(line1);
        this._temPrimitive.push(line2);
      } else {
        var line1 = createPolylinePrimitive([[...p1], [...p2]], [0, 1, 0, 1]);
        this.$root.$earth.czm.scene.primitives.add(line1);
        this._temPrimitive.push(line1);
      }
      obj.creating = false;
      obj.destroy();
      obj = null;
      this.measurementType = "NONE";
    },
    circleIntervisible () {
      if (this.measurementType !== "SPACE_Circle_Intervisible") {
        this._circle = new XE.Obj.Plots.GeoCircle(this.$root.$earth);
        this._circle.isCreating = true;
        this._circle.creating = true;
        this._circle.ground = false;
        this.updateCreatingBind();
        let self = this;
        this._creating.push(
          XE.MVVM.bind(this, "measuring", this._circle, "creating")
        );

        this.measurementType = "SPACE_Circle_Intervisible";
      }
    },
    startIntervisible () {
      if (this.measurementType !== "SPACE_Intervisible") {
        this.updateCreatingBind();
        this._intervisible = new XE.Obj.Polyline(this.$root.$earth);
        this._intervisible.width = 2;
        this._intervisible.isCreating = true;
        this._intervisible.creating = true;
        this._intervisible.ground = false;
        let self = this;
        this._creating.push(
          XE.MVVM.watch(
            () => ({
              positions: [...this._intervisible.positions]
            }),
            () => {
              if (self._intervisible.positions.length > 2) {
                self._intervisible.positions[0][2] += 0.5;
                self.drawIntervisibleLine(
                  self._intervisible.positions[0],
                  self._intervisible.positions[1],
                  self._intervisible
                );
              }
            }
          )
        );

        this._temGeometry.push(this._intervisible);
        this.measurementType = "SPACE_Intervisible";
      }
    },
    angleMeasure () {
      if (this.measurementType !== "SPACE_ANGLE") {
        this.updateCreatingBind();
        this._angle = new XE.Obj.Plots.GeoPolylineArrow(this.$root.$earth);
        this._angle.ground = false;
        this._angle.width = 2;
        this._angle.isCreating = true;
        this._angle.creating = true;

        this._creating.push(
          XE.MVVM.bind(this, "measuring", this._angle, "creating")
        );
        let self = this;
        this._creating.push(
          XE.MVVM.watch(
            () => ({
              positions: [...this._angle.positions]
            }),
            () => {
              self._labels.forEach(l => l.destroy());
              self._labels = [];
              if (self._angle.positions.length == 2) {
                var result = XE.Tool.Math.hpr(
                  self._angle.positions[0],
                  self._angle.positions[1]
                );
                if (result) {
                  var lb = self.createLabel({
                    pos: self._angle.positions[1],
                    dis:
                      Math.round(
                        (((result[0] * 180) / Math.PI + 90) % 360) * 100
                      ) /
                      100 +
                      "度"
                  });
                  self._labels.push(lb);
                }
              } else if (self._angle.positions.length > 2) {
                this._angle.creating = false;
              }
            }
          )
        );

        this._temGeometry.push(this._angle);
        this.measurementType = "SPACE_ANGLE";
      }
    },
    areaGroudMeasure () {
      // this.areaGroudinterval = 0;
      if (!this.$root.$earth.terrainEffect.depthTest) {
        this.$root.$earthUI.promptInfo(
          "使用此功能需要打开深度检测，已为您自动打开！",
          "warning"
        );
        this.$root.$earth.terrainEffect.depthTest = true;
      }
      if (this.measurementType !== "SPACE_AREA_GROUD") {
        this._areaGroud = new XE.Obj.CustomPrimitiveExt.Image(
          this.$root.$earth
        );
        this._areaGroud.isCreating = true;
        this._areaGroud.creating = true;
        this._areaGroud.imageUrl = null;
        this._areaGroud._customPrimitive.pass = 8;
        this._areaGroud._customPrimitive.color = [0, 1, 0, 0.5];
        this.updateCreatingBind();
        this._creating.push(
          XE.MVVM.bind(this, "measuring", this._areaGroud, "creating")
        );
        this._temGeometry.push(this._areaGroud);
        this.measurementType = "SPACE_AREA_GROUD";
      } else {
        this.measurementType = "NONE";
        if (this._areaGroud) {
          this._areaGroud.destroy();
          this._areaGroud = null;
        }
      }
    },
    updateMeasure (p) {
      this._disGroudLabels.forEach(l => l.destroy());
      this._disGroudLabels = [];
      if (p.length > 1) {
        var it = this.disGroudinterval;
        var result = getDisAndLabelPos(p, it, this.$root.$earth);
        if (!result) {
          return;
        }
        this._result = result;
        var labels = result.label;

        labels.forEach(l => {
          var lb = this.createLabel(l);
          this._disGroudLabels.push(lb);
        });
      }
    },
    disGroudMeasure () {
      // this.disGroudinterval = 0;
      if (this.measurementType !== "SPACE_DIS_GROUD") {
        this._disGroud = new XE.Obj.Plots.GeoPolyline(this.$root.$earth);
        this._disGroud.creating = true;
        this.updateCreatingBind();
        this._creating.push(
          XE.MVVM.bind(this, "disGroudMeasureing", this._disGroud, "creating")
        );
        this._creating.push(
          XE.MVVM.watch(
            () => ({
              positions: [...this._disGroud.positions]
            }),
            () => {
              this.updateMeasure(this._disGroud.positions);
            }
          )
        );
        this._temGeometry.push(this._disGroud);
        this.measurementType = "SPACE_DIS_GROUD";
      }
    },
    sectionPlane () {
      this.measurementType = "SPACE_SECTION_GROUD";
      this.$root.$earthUI.showPropertyWindow(
        {},
        {
          component: "ProfileAnalysis"
        }
      );
    },
    updateCreatingBind () {
      this._creating.forEach(d => d());
      this._creating = [];
      let self = this;
      if (this._labels.length > 0) {
        this._labels.forEach(l => {
          self._temGeometry.push(l);
        });
        this._labels = [];
        this.measurementType = "NONE";
      }
    },
    createLabel (option) {
      let p = new XE.Obj.Plots.GeoPin(this.$root.$earth);
      p.innerHTML =
        '<div style="cursor:pointer;position: absolute;width:300px;left:6px; line-height:15px;color: white;">' +
        '<span style="padding:2px;border-radius: 2px;text-stroke:2px #000;font-size: 14px;color:#ffffff;background-color: rgba(50,50,50,0.5)">' +
        option.dis +
        "</span></div>";
      p.position = option.pos;
      p._pin.show = false;
      return p;
    },
    setTileset (tileset) {
      if (this._tileset !== tileset) {
        this._tileset = tileset;
      }

      this.enabled = !!this._tileset;
    },
    startCameraVideo () {
      var demoVideo =
        XE.HTML.getScriptBaseUrl("XbsjEarthUI") + "/assets/demo.mp4";
      // 视频融合
      var cameraVideo = new XE.Obj.CameraVideo(this.$root.$earth);
      cameraVideo.setPositionWithCurrentCamera();
      cameraVideo.videoUrl = demoVideo;
      cameraVideo.far = 50;
      cameraVideo.name = "未命名视频融合";
      cameraVideo.isCreating = true;

      this.$root.$earthUI.showPropertyWindow(cameraVideo);
    },
    startViewshed () {
      var viewshed = new XE.Obj.Viewshed(this.$root.$earth);
      viewshed.setPositionWithCurrentCamera();
      viewshed.far = 50;
      viewshed.name = "未命名视域分析";
      viewshed.isCreating = true;

      this.$root.$earthUI.showPropertyWindow(viewshed);
    },
    startFlattenning () {
      var flattenedPolygons = new XE.Obj.FlattenedPolygonCollection(
        this.$root.$earth
      );
      flattenedPolygons.name = "未命名压平组";
      flattenedPolygons.isCreating = true;
      this.$root.$earthUI.showPropertyWindow(flattenedPolygons);
    },
    startClipping () {
      var clippingPlane = new XE.Obj.ClippingPlane(this.$root.$earth);
      clippingPlane.name = "未命名剖切面";
      clippingPlane.positionPicking = true;
      clippingPlane.isCreating = true;
      this.$root.$earthUI.showPropertyWindow(clippingPlane);
    },
    startWater () {
      var water = new XE.Obj.Water(this.$root.$earth);
      water.name = "未命名水面";
      water.isCreating = true;
      water.positionPicking = true;
      water.creating = true;
      this.$root.$earthUI.showPropertyWindow(water);
    },
    expansionEditor () {
      //显示模型编辑器
      this.$root.$earthUI.showPropertyWindow(this._tileset, {
        component: "TilesetExpansionEditor"
      });
    },
    modelexpansion_dragover (e) {
      e.preventDefault();
      let czmObj = this.$root.$earthUI.getCzmObjectFromDrag(e.dataTransfer);
      if (czmObj && czmObj instanceof XE.Obj.Tileset) {
        e.dataTransfer.dropEffect = "copy";
        this.modelexpansion_over = true;
        this.enabled = true;
      } else {
        e.dataTransfer.dropEffect = "none";
      }
    },
    modelexpansion_dragleave () {
      this.modelexpansion_over = false;
      const csn3 = this.$root.$earth.sceneTree.currentSelectedNode;
      if (csn3 && csn3.czmObject && csn3.czmObject instanceof XE.Obj.Tileset) {
        this.enabled = true;
      } else {
        this.enabled = false;
      }
    },
    modelexpansion_drop (e) {
      this.modelexpansion_over = false;
      e.preventDefault();
      let czmObj = this.$root.$earthUI.getCzmObjectFromDrag(e.dataTransfer);
      if (czmObj && czmObj instanceof XE.Obj.Tileset) {
        //显示面板
        this.$root.$earthUI.showPropertyWindow(czmObj, {
          component: "TilesetExpansionEditor"
        });
        this._czmObj = czmObj;
        const csn2 = this.$root.$earth.sceneTree.currentSelectedNode;
        if (
          csn2 &&
          csn2.czmObject &&
          csn2.czmObject instanceof XE.Obj.Tileset
        ) {
          this.enabled = true;
        } else {
          this.enabled = false;
        }
      }
    },
    clearResults () {
      this.$root.$earth.analyzation.measurement.clearResults();
      this.$root.$earth.analyzation.cutFillComputing.clearResults();
      this.$root.$earth.analyzation.cutFillComputing.positions = [];
      this.cutFillComputingShow = false;
      if (this._temGeometry) {
        this._temGeometry.forEach(e => {
          e.destroy();
        });
        this._temGeometry = [];
      }
      if (this._temPrimitive) {
        this._temPrimitive.forEach(e => {
          this.$root.$earth.czm.scene.primitives.remove(e);
        });
      }
      this.measurementType = "NONE";
      this.$root.$earth.analyzation.cutFillComputingOld.clearResults();
    },
    startMove (event) {
      //如果事件的目标不是本el 返回
      if (
        event.target.parentElement !== this.$refs.container &&
        event.target.parentElement.parentElement !== this.$refs.container
      ) {
        this.moving = false;
        return;
      }
      this.moving = true;
    },
    onMoving (event) {
      //获取鼠标和为开始位置的插值，滚动滚动条
      if (!this.moving) return;

      var dom = this.$refs.container;
      var wleft = dom.scrollLeft - event.movementX;
      if (wleft >= 0 && wleft <= dom.scrollWidth - dom.clientWidth) {
        dom.scrollLeft = wleft;
      }
    },
    endMove (envent) {
      this.moving = false;
    },
    // 挖坑
    cutSurfaceBtn () {
      var cutsurface = new XE.Obj.CutSurface(this.$root.$earth);
      cutsurface.name = "挖坑";
      cutsurface.autoRegisterEditing = true;

      cutsurface.isCreating = true;
      cutsurface.creating = true;
      console.log(cutsurface);
      this.$root.$earthUI.showPropertyWindow(cutsurface);
    }
  }
};
</script>

<style>
.visualbutton {
  background: url(../../../../images/visual.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.visualbutton:hover {
  background: url(../../../../images/visual_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.visibilitybutton {
  background: url(../../../../images/visibility.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.visibilitybutton:hover {
  background: url(../../../../images/visibility_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.visualbuttonActive {
  background: url(../../../../images/visual_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.flattenbutton {
  background: url(../../../../images/flatten.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.flattenbutton:hover {
  background: url(../../../../images/flatten_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.floodingbutton {
  background: url(../../../../images/flooding.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.floodingbutton:hover {
  background: url(../../../../images/flooding_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.videofusionbutton {
  background: url(../../../../images/videofusion.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.videofusionbutton:hover {
  background: url(../../../../images/videofusion_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.sectioningbutton {
  background: url(../../../../images/sectioning.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.sectioningbutton:hover {
  background: url(../../../../images/sectioning_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.waterbutton {
  background: url(../../../../images/water.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.waterbutton:hover {
  background: url(../../../../images/water_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.potholingbutton {
  background: url(../../../../images/potholing.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.potholingbutton:hover {
  background: url(../../../../images/potholing_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.pointbutton {
  background: url(../../../../images/point.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.pointbutton:hover {
  background: url(../../../../images/point_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.pointbuttonActive {
  background: url(../../../../images/point_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.distancebutton {
  background: url(../../../../images/distance.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.distancebutton:hover {
  background: url(../../../../images/distance_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.distancebuttonActive {
  background: url(../../../../images/distance_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.heightbutton {
  background: url(../../../../images/height.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.heightbutton:hover {
  background: url(../../../../images/height_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.heightbuttonActive {
  background: url(../../../../images/height_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.areabutton {
  background: url(../../../../images/area.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.areabutton:hover {
  background: url(../../../../images/area_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.areabuttonActive {
  background: url(../../../../images/area_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.sectionGroudbutton {
  background: url(../../../../images/profileanalysis.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.sectionGroudbutton:hover {
  background: url(../../../../images/profileanalysis_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.sectionGroudbuttonActive {
  background: url(../../../../images/profileanalysis_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.areaGroudbutton {
  background: url(../../../../images/landarea.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.areaGroudbutton:hover {
  background: url(../../../../images/landarea_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.areaGroudbuttonActive {
  background: url(../../../../images/landarea_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.disGroudbutton {
  background: url(../../../../images/disgroud.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.disGroudbutton:hover {
  background: url(../../../../images/disgroud_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.disGroudbuttonActive {
  background: url(../../../../images/disgroud_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.anglebutton {
  background: url(../../../../images/angle.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.anglebutton:hover {
  background: url(../../../../images/angle_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.anglebuttonActive {
  background: url(../../../../images/angle_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.circleIntervisiblebutton {
  background: url(../../../../images/circleIntervisible.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.circleIntervisiblebutton:hover {
  background: url(../../../../images/circleIntervisible_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.circleIntervisiblebuttonActive {
  background: url(../../../../images/circleIntervisible_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.intervisiblebutton {
  background: url(../../../../images/intervisible.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.intervisiblebutton:hover {
  background: url(../../../../images/intervisible_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.intervisiblebuttonActive {
  background: url(../../../../images/intervisible_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.volumebutton {
  background: url(../../../../images/volume.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.volumebutton.highlight,
.volumebutton:hover {
  background: url(../../../../images/volume_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.volumebuttonActive {
  background: url(../../../../images/volume_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.resetbutton {
  background: url(../../../../images/reset.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.resetbutton:hover {
  background: url(../../../../images/reset_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.stylebutton {
  background: url(../../../../images/style.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.stylebutton.highlight,
.stylebutton:hover {
  background: url(../../../../images/style_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.stylebutton:disabled {
  background: url(../../../../images/style_disabled.png) no-repeat;
  background-size: contain;
  cursor: not-allowed;
}
.stylebutton {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}
.modelexpansionbutton {
  background: url(../../../../images/modelexpansion.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.modelexpansionbutton.highlight,
.modelexpansionbutton:hover {
  background: url(../../../../images/modelexpansion_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.modelexpansionbutton:disabled {
  background: url(../../../../images/modelexpansion_disabled.png) no-repeat;
  background-size: contain;
  cursor: not-allowed;
}
.modelexpansionbutton {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}
.cutsurfacebutton {
  background: url(../../../../images/cutsurface.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.cutsurfacebutton.highlight,
.cutsurfacebutton:hover {
  background: url(../../../../images/cutsurface_on.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
</style>

