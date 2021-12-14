<template>
  <div>
    I am div
    <div>content</div>
    <a-tooltip
      :trigger="['hover']"
      placement="topLeft"
      overlay-class-name="numeric-input"
      :mouseEnterDelay="0.3"
    >
      <!--      <span v-if="value" slot="title" class="numeric-input-title">-->
      <!--        {{ value !== "-" ? formatNumber(value) : "-" }}-->
      <!--      </span>-->
      <template v-slot:title> Input a number </template>
      <a-input
        placeholder="Input a number"
        :max-length="25"
        style="width: 120px"
      />
    </a-tooltip>
    <a-tooltip
      :trigger="['hover']"
      placement="topLeft"
      overlay-class-name="numeric-input"
      :mouseEnterDelay="0.3"
    >
      <!--      <span v-if="value" slot="title" class="numeric-input-title">-->
      <!--        {{ value !== "-" ? formatNumber(value) : "-" }}-->
      <!--      </span>-->
      <template v-slot:title> Input a number </template>
      <a-input
        placeholder="Input a number"
        :max-length="25"
        style="width: 120px"
      />
    </a-tooltip>
    <a-dropdown :trigger="['contextmenu']">
      <div
        :style="{
          textAlign: 'center',
          background: '#f7f7f7',
          height: '200px',
          lineHeight: '200px',
          color: '#777',
        }"
      >
        Right Click on here
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item key="1">1st menu item</a-menu-item>
          <a-menu-item key="2">2nd menu item</a-menu-item>
          <a-menu-item key="3">3rd menu item</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: "ref",
};
</script>
