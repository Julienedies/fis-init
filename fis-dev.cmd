:: fis server start --type node --port 3000 --root ./express &
fis release --file fis-conf/dev.js --dest local -D  --clean --watch
