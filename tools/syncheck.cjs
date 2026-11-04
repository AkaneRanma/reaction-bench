// 语法自检：node tools/syncheck.cjs [文件，默认 ./index.html]
const fs = require('fs'), vm = require('vm'), path = require('path');
const f = path.resolve(process.argv[2] || path.join(__dirname, '..', 'index.html'));
const h = fs.readFileSync(f, 'utf8');
const i = h.indexOf('<script>'), j = h.lastIndexOf('</script>');
if (i < 0 || j < 0) { console.error('no inline <script> found in', f); process.exit(1); }
const js = h.slice(i + 8, j);
new vm.Script(js, { filename: f });
const lines = h.split('\n').length;
console.log('JS OK ' + js.length + ' chars; file ' + Buffer.byteLength(h) + ' bytes, ' + lines + ' lines (' + path.basename(f) + ')');
