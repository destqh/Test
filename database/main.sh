
#!/bin/sh
node drop_docs.js
node create_docs.js
node --max-old-space-size=4096 import_docs.js
node print_docs.js