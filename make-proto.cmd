@echo off
@setlocal
set CUR_DIR=%cd%
cd %~dp0
call node_modules\.bin\pbjs ./src/proto/ctt.proto -t static-module -o ./src/proto/ctt.js
call node_modules\.bin\pbts -o ./src/proto/ctt.d.ts ./src/proto/ctt.js
cd %CUR_DIR%
@endlocal
