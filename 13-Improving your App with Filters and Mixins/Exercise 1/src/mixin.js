export const computedMixin = {
 computed : {
    reverse() {
      return this.text.split('').reverse().join('');
    },
    countLength() {
      return this.text + ' (' + this.text.length + ')';
    }
  }
}
