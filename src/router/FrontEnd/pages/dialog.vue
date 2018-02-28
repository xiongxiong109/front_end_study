<template>
  <div class="page">
    <h4>use Dialog标签</h4>
    <button @click="evtShowDialog">open dialog</button>
    <dialog ref="dialog">
      <h4>{{title}}</h4>
      <div>{{msg}}</div>
      <button @click="evtHideDialog">close</button>
    </dialog>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        title: 'dialog',
        msg: 'dialog content'
      }
    },
    methods: {
      evtShowDialog() {
        this.$refs.dialog.showModal();
      },
      evtHideDialog() {
        this.$refs.dialog.close();
      }
    }
  }
</script>
<style type="text/css">
  dialog {
    margin: auto;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 3px;
    animation:
      fadeIn .3s .1s ease both,
      slideDown .3s .1s ease both;
  }
  dialog::backdrop {
    background-color: rgba(0,0,0,.5);
    animation: fadeIn .3s ease both;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(-50%);
    }
    to {
      transform: translateY(0);
    }
  }
</style>