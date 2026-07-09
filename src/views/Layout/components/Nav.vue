<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="true">
          <li><a href="javascript: ;"><i class="iconfont icon-user"></i>周杰伦</a></li>
          <li>
            <el-popconfirm title="确定要退出吗？" confirm-button-text="确定" cancel-button-text="取消">
              <template #reference>
                <a href="javascript: ;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript: ;">我的订单</a></li>
          <li><a href="javascript: ;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript: ;">请先登录</a></li>
          <li><a href="javascript: ;">帮助中心</a></li>
          <li><a href="javascript: ;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped lang="scss">
.app-topnav {
  // background: #333;
  ul {
    display: flex;
  }
}
</style>
