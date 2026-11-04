const fs=require('fs'), vm=require('vm');
const h=fs.readFileSync('E:/workplace/tmp/reaction/rt-fair.html','utf8');
const i=h.indexOf('<script>'), j=h.lastIndexOf('</script>');
const js=h.slice(i+8, j);
new vm.Script(js);
console.log('JS OK', js.length, 'chars;', 'file', h.length, 'bytes');
