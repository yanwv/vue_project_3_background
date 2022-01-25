<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail title="总销售额" count="¥ 126560">
            <template slot="charts">
              <span>周同比 56.67%</span>&nbsp;&nbsp;
              <span>日同比 19%</span>
            </template>
            <template slot="footer">
              <span>日销售额 ¥ 6560</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="访问量" count="88460">
            <template slot="charts">
              <LineCharts></LineCharts>
            </template>
            <template slot="footer">
              <span>日访问量 6666</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="支付笔数" count="88460">
            <template slot="charts">
              <BarCharts></BarCharts>
            </template>
            <template slot="footer">
              <span>转换率 64%</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="运营活动效果" count="78%">
            <template slot="charts">
              <ProgressCharts />
            </template>
            <template slot="footer">
              <span>日访问量 6666</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "./Detail";
import LineCharts from "./lineChart";
import BarCharts from "./barCharts";
import ProgressCharts from "./progressCharts";
export default {
  components: {
    Detail,
    LineCharts,
    BarCharts,
    ProgressCharts,
  },
};
</script>

<style scoped>
</style>