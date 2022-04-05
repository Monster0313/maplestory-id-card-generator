<template>
  <div class="union-input">
    <label>聯盟戰地：</label>
    <input
      v-model.number="inputUnion"
      type="number"
      min="1"
      max="12000"
      step="1"
      required
      @keypress="numbersOnly"
      @keyup="setUnion"
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      inputUnion: 10
    }
  },
  computed: {
    ...mapState('card', ['union'])
  },
  watch: {
    inputUnion () {
      if (this.inputUnion > 12000) {
        this.inputUnion = 10
      }
    }
  },
  created () {
    if (this.union !== 10) {
      this.inputUnion = this.union
    }
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    setUnion () {
      this.SET_CARD({ key: 'union', value: this.inputUnion })
    },
    numbersOnly (evt) {
      evt = (evt) || window.event
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.union-input {
  margin-bottom: 15px;
}

.union-input > * {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 400;
  font-size: 18px;
}

label {
  color: #fff;
}
input {
  width: 180px;
}
</style>
