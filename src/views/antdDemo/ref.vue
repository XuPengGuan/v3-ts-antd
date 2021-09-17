<template>
  <div>
    I am div
    <div>content</div>
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
