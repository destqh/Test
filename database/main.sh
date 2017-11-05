
#!/bin/sh
node ./database/drop_docs.js
node ./database/create_docs.js
node --max-old-space-size=4096 ./database/import_docs.js
node ./database/print_docs.js