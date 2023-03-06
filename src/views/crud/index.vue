<template>
  <div ref="el" class="hehe">
    <div class="haha">
      <div class="showaxis">
        <div>{{ x }}</div>
        <div>{{ y }}</div>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="formInline.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="formInline.age" placeholder="请输入年龄" />
        </el-form-item>
        <el-form-item label="地区">
          <el-select v-model="formInline.city" placeholder="请选择地区">
            <template v-for="(item, index) in cityOption" :key="item.id">
              <el-option :label="item.city" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
        <!-- <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item> -->
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { useSearchFn, useSearchWork } from "./hook/useSearch";

const { city: cityOption, x, y } = useSearchFn();

const formInline = reactive({
  name: "",
  age: "",
  city: ""
});
</script>

<style scoped>
.showaxis {
  position: sticky;
  top: 0;
}

.haha {
  height: 2000px;
}
</style>
