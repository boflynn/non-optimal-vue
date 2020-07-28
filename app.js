  var app = new Vue({
    el: '#app',
    data: {
      message: ''
    },
    mounted() {
      if (true) // multiline blocks should be enclosed in curly braces
        debugger; // debugger statements should not be used
        alert('hey there'); // alerts should not be used

      let shouldBeConst = 'Here\'s a message'; // var should be constant and var is unused
      this.message = shouldBeConst;
      var shouldBeLetOrConst = 6; // vars should be defined as let or const
      console.log(shouldBeLetOrConst); // no console.log
    },
    methods: {
      sweetFunc() {
        return 'this is a sweet return from a sweet func';
        const unreachable = 'this can\'t be reached'; // All code should be reachable
        unreachable = 'updating a constant'; // Don't update constant vars
      }
    } // Trailing comma should be used
  });