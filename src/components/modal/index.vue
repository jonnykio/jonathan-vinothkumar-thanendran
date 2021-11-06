<template>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <div class="header">
                <slot name="header">
                    Product Header
                </slot>
              </div>

              <div class="modal-body">
                <div class="body">
                  <slot name="body">
                     Product Body
                  </slot>    
                </div>
              </div>

              <div class="modal-footer">
                <div class="footer">
                  <slot name="body">
                     Product Body
                  </slot>
                  <button class="modal-default-btn" @click="$emit('close')">
                      Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * Vue Transition classes CSS3 Transition 
 * effect for modal transitions
 */
.modal-leave-active {
  transition: all 0.5s linear;
}

.modal-leave .modal-container {
  opacity: 1;
}

.modal-leave-to .modal-container {
  opacity: 0;
}
</style>
