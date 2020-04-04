Assembly
========

So, when doing the [Exploit-Education Phoenix](https://exploit.education/phoenix/) challenge, wich is the "spiritual successor" to the Protostar challenges that was recommended by [Live Overflow](https://liveoverflow.com/start-hacking/) I felt like learning some assembly...That's it, just felt like... :P

<p class="list-header">Some things to know :</p>

* First is good to know that assembly is a *low-level* language, wich means that it's very close to the CPU, it's not machine code but it's very close as you'll see. 
* Also, there are a lot of assembly "flavors" and I **do not** cover all them here, the one wich I cover some basics of is the [NASM](https://www.nasm.us/) 
* Nasm can be installed in any O.S, but the syscalls are different per O.S, so the code in here will be only useful to linux machines
* And here's a [linux x86 syscall table](https://syscalls.kernelgrok.com/), alongside with a good [ascii table](https://theasciicode.com.ar/).

The sequence of commands bellow is used to run [x86 assembly](https://en.wikipedia.org/wiki/X86_assembly_language) code:

<pre class="outer-code"><code class="nohighlight">
$ nasm -f elf [asm program.asm]
$ ld -m elf_i386 [asm program.o] -o [asm program]
$ ./[asm program]

</code></pre>

Just replace the [**asm program**] with the name of your program, or you could use [my script](../../ExtraFiles/Code/runasm.sh).

<div markdown='1' class="wrapper">

<button type="button" class="explanation-button"> My Script "GUIDE" </button>

<div markdown='1' class="content">

Basically it is a shell script that does the same thing but less messy, and it can create a file for debugging ( wich btw is created anyway with the commands above, but it does in a more organized way ) . It's used like this:

<pre class="outer-code"><code class="nohighlight">
$ ./runasm.sh [asm program]
$ ./runasm.sh [asm program] debug

</code></pre>

The 'debug' option creates a file called **'[asm program]Debugg'**, which'll contain the files from both operations, as if you had run both commands yourself, and you can use the executable ( the file without an extension ) with [GDB](https://www.gnu.org/software/gdb/) or [Radare](https://www.radare.org/r/)to debug your program.

</div>
</div>

Registers
---------

So the cpu has registers wich are "memory slots" with ( usually today ) **64 - bits** of space that holds values, that are going to be used by the program, bellow there's a list with some registers.

<div markdown='1' class="wrapper">

<div markdown='1' class="replaceable-content">

| 64-bit | 32-bit | 16-bit | high 8-bit | lower 8-bit |
| ------ | ------ | ------ | ---------- | ----------- |
| RAX    | EAX    | AX     | AH         | AL          |
| RDX    | EDX    | DX     | DH         | DL          |
| RSI    | ESI    | SI     | N/A        | SIL         |
| RSP    | ESP    | SP     | N/A        | SPL         |
| RBP    | EBP    | BP     | N/A        | BPL         |
| RIP    | EIP    | IP     | N/A        | N/A         |

</div>

<button type="button" class="replace-button"> Full Register List </button>
<div markdown='1' class="content">


| 64-bit | 32-bit | 16-bit | high 8-bit | lower 8-bit |
| ------ | ------ | ------ | ---------- | ----------- |
| RAX    | EAX    | AX     | AH         | AL          |
| RBX    | EBX    | BX     | BH         | BL          |
| RCX    | ECX    | CX     | CH         | CL          |
| RDX    | EDX    | DX     | DH         | DL          |
| RSI    | ESI    | SI     | N/A        | SIL         |
| RDI    | EDI    | DI     | N/A        | DIL         |
| RSP    | ESP    | SP     | N/A        | SPL         |
| RBP    | EBP    | BP     | N/A        | BPL         |
| R8     | R8D    | R8W    | N/A        | R8B         |
| R9     | R9D    | R9W    | N/A        | R9B         |
| R10    | R10D   | R10W   | N/A        | R10B        |
| R11    | R11D   | R11W   | N/A        | R11B        |
| R12    | R12D   | R12W   | N/A        | R12B        |
| R13    | R13D   | R13W   | N/A        | R13B        |
| R14    | R14D   | R14W   | N/A        | R14B        |
| R15    | R15D   | R15W   | N/A        | R15B        |
| RIP    | EIP    | IP     | N/A        | N/A         |


</div>
</div>

As you can see there're registers for different sizes of memory, but in fact they are just smaller pieces of the larger registers, for example the 'EAX' is just one half of the 'RAX', they're laid down as shown below:

<pre id="register"><code class="nohighlight">64-bit
┌───────────────────────────────────────────────────────────────────┐
│                                32-bit
│                                ┌──────────────────────────────────┐
│                                │                16-bit
│                                │                ┌─────────────────┐
│                                │                8H-bit   8L-bit
│                                │                ┌────────┬────────┐
│                                │                │        │        │
</code></pre>

So when you call for the content of 'RAX' it'll get you a 64-bit value, and if in a debugger you call for the content of 'EAX' it'll get you a 32-bit value wich'll be exact the same as the lower 32-bit of the 64-bit value from 'RAX'


Instructions
------------

As any other programming language, assembly has instructions that tells the computer what to do, [here](https://www.aldeid.com/wiki/X86-assembly/Instructions) you can find a list with all the x86 instructions, and the respective sytax for each one. And here's an 'hello world' code example in x86 assembly:

<pre><code class="x86asm">SECTION	.data
msg		db		'Hello World', 0Ah

SECTION	.text
global	_start

_start:
	mov		edx, 13
	mov		ecx, msg
	mov		ebx, 1
	mov		eax, 4
	int		80h       ; does the syscall

	mov		ebx, 0
	mov		eax, 1
	int		80h       ; does the syscall
</code></pre>

And I'll explain line by line the 'hello world' program.
First we'll use the 'SECTION' instruction, and to understand that better, we'll have to see how the memory is laid out in the computer.

Random Access Memory
====================

This is how the operational systems ( usually ) organize memory, they separate it in different sections, each one with a different pourpuse.

<div markdown="1" id="memory-wrapper">

<p id="memory-explanation">The stack holds values when a 'call' happens, or when the programmer interacts with the stack.<br><br> Then we have the heap, wich is the dynamic memory region of your computer, that is managed entirely by the programmer.<br><br>And then there's the bss section wich holds uninitialised variables.<br><br>The data section holds initialised variables.<br><br>And the text section holds our code</p> 

<pre id="memory"><code class="nohighlight">
0xffff
┌───────────────────────────┐
│                           │
│ STACK (high addresses     │
│                           │
├───────────────────────────┤
│                           │
│                           │
│                           │
│ FREE SPACE (for growt     │
│                           │
│                           │
│                           │
├───────────────────────────┤
│                           │
│ HEAP                      │
│                           │
├───────────────────────────┤
│                           │
│ BSS (unitialized data)    │
│                           │
├───────────────────────────┤
│                           │
│ DATA (initialized data)   │
│                           │
├───────────────────────────┤
│                           │
│ TEXT (lower addresses)    │
│                           │
└───────────────────────────┘
0x0000
</code></pre>

</div>


Stack
=====

The stack is a region in memory that holds values, following a LIFO structure, it's controlled by the instructions **push** and **pop**, with the syntax shown bellow:

<pre><code class="x86asm">push    [value]
push    0x60 ; decrements the stack pointer(the stack grows down)

pop     [register]
pop     eax  ; increments the stack pointer
</code></pre>

Both the **rsp** and **rbp** and the respectively lower ones are responsible by the stack. The __rsp__, the **stack pointer** points to the top of the stack(lower address) and the __rbp__, the **base pointer** points to the base of the stack(higher address).

Heap
====

The heap is a region that it's mostly used by more high level code, like c with the **malloc** function for example.

Bss
===

As said the **bss** section holds the uninitialides variables, and it does with the use of the syntax bellow:

<pre><code class="x86asm">SECTION .bss
var1:           RESB    1 ; 1 byte
var2:           RESW    1 ; 1 word
var3:           RESD    1 ; 1 double word
var4:           RESQ    1 ; 1 double precision float (quad word)
var5:           REST    1 ; 1 extended precision float
[variable name] [size]  [quantity]
</code></pre>

Data
====

Then the data section, the section wich stores our variables following the syntax bellow:

<pre><code class="x86asm">SECTION .data
var    DB 64  ; byte, referred to its location as var, containing the value 64.
var2   DB ?   ; uninitialized byte, referred to its location as var2.
       DB 10  ; byte with no label, containing the value 10. Its location is var2 + 1.
X      DW ?   ; 2-byte(word) uninitialized value, referred to its location as X.
Y      DD 300 ; 4-byte(double word), its location is Y, initialized to 300.
</code></pre>

Text
====

And the text section, the section wich stores the code, you use't just like I did with the **hello world** example above:

<pre><code class="x86asm">SECTION .text
global  _start

_start:
    mov     ebx, 0
    mov     eax, 1
    int     80h       ; does the syscall	
</code></pre>


Hello World
===========

Now back to our **hello world** program, as I was saing, the **section** command, so the 



























<div markdown="1" class="wrapper" id="links">
<button type="button" class="explanation-button">Show reference links</button>
<div markdown="1" class="content">

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| [Aldeid assembly x86 instructions](https://www.aldeid.com/wiki/X86-assembly/Instructions)          |
| [ASM tutor](https://asmtutor.com)                                                                  |
| [A Beginner's Guide to x86 Assembly](https://derekmaciel.com/2017-02-12/beginners-assembly-part1/) |

</div>
</div>
