#!/usr/bin/env bash

File=${1/\.asm/}

nasm -f elf -F dwarf -g "$1"
ld -m elf_i386 "$File.o" -o "$File"

./"$File"

if [ -n "$2" ] && [ "$2" == "debug" ]
then
	filename="${File}Debugg"
	mkdir -p "$filename"
	mv "$File.o" "$filename"
	mv "$File" "$filename"
else
	rm "$File.o"
	rm "$File"
fi
