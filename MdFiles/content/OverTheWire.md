Over The Wire - Bandit
======================

So I heard that this wargame is a great "starter/noob wargame" so I played and now here is the writteup along with my thought process. And in this wargame the "flags" that you have to find are gonna be the password for the next level, another thing I want to clarify is that the string '[...]' will show up in a lot of the logs of the challenges, that just means that a lot of unusefull output(for the pourposes of this writteup) was there.

By the way if you haven't tried, try!! ۹(ÒہÓ)۶

And if you are here because you're stuck on some level, try for at least a day, don't go to a writteup whenever you get stuck on small things, half the fun is to get stuck and then solve the thing, so maybe try a little bit more ;)

Level 0

The [level0](https://overthewire.org/wargames/bandit/bandit0.html) was pretty simple just an ssh connection and a cat command, and in this case since this is the first level the password is the same as the username d(⌒ー⌒).

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit0@bandit.labs.overthewire.org

bandit0@bandit.labs.overthewire.org's password:
[...]

bandit0@bandit:~$ ls
readme
bandit0@bandit:~$ cat readme
boJ9jbbUNNfktd78OOpsqOltutMc3MY1
bandit0@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 1

The thing about [level1](https://overthewire.org/wargames/bandit/bandit1.html) is that '-' is not a "good" file name, because whenever you try to 'ls' the file, the shell will interpret as an attempt of pass an argument and won't give you the content of the file, so you have to either give it's full path, or it's relative one, which is what I did.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit1@bandit.labs.overthewire.org

bandit1@bandit.labs.overthewire.org's password:
[...]

bandit1@bandit:~$ ls
-
bandit1@bandit:~$ cat \-
^C
bandit1@bandit:~$ cat ./-
CV1DtqXWVFXTvM2F0k09SHz0YwRINYA9
bandit1@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.

</code></pre>

Level 2

In [level2](https://overthewire.org/wargames/bandit/bandit2.html) what you have to see is that, when you ask it to 'ls' a file with spaces on the name, without using any special "markers"(I don't know the proper name so I just made that up), it will try to read each string separated by the spaces as a different command, so just either use a backslash before each space or put the name in between quotes.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit2@bandit.labs.overthewire.org

bandit2@bandit.labs.overthewire.org's password:
[...]

bandit2@bandit:~$ ls
spaces in this filename
bandit2@bandit:~$ cat spaces\ in\ this\ filename
UmHadQclWmgdLOKQ3YNgjWxGoRMb5luK
bandit2@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Leve 3

On [level3](https://overthewire.org/wargames/bandit/bandit3.html) you just have to look for the hidden directories, just use 'ls -la'.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit3@bandit.labs.overthewire.org

bandit3@bandit.labs.overthewire.org's password:
[...]

bandit3@bandit:~$ ls
inhere
bandit3@bandit:~$ ls inhere/
bandit3@bandit:~$ cd inhere/
bandit3@bandit:~/inhere$ ls -la
total 12
drwxr-xr-x 2 root    root    4096 Oct 16  2018 .
drwxr-xr-x 3 root    root    4096 Oct 16  2018 ..
-rw-r----- 1 bandit4 bandit3   33 Oct 16  2018 .hidden
bandit3@bandit:~/inhere$ cat .hidden
pIwrPrtPN36QITSp3EQaw936yaFoFgAB
bandit3@bandit:~/inhere$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 4

[Level4](https://overthewire.org/wargames/bandit/bandit4.html) has more to do, first you'll have to use 'find' to do a search for readable files on the directory, once you do that you can just 'cat' all the files and you'll find the result in one of them. Btw this probably has a better solution, but the one I told you worked for me so I didn't bother searching for the best one, maybe you'll find it.

Also I have no ideia why the colors are different from the other logs. （￣□￣；） (Sometimes they are, sometimes no, and I don't know why, and it doesn't seem like a big problem, so I'm not gonna bother fixing it... sorry .-. )

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit4@bandit.labs.overthewire.org

bandit4@bandit.labs.overthewire.org's password:
[...]

bandit4@bandit:~$ ls
inhere
bandit4@bandit:~$ cd inhere/
bandit4@bandit:~/inhere$ ls
-file00  -file01  -file02  -file03  -file04  -file05  -file06  -file07  -file08  -file09
bandit4@bandit:~/inhere$ find $(pwd) -readable
/home/bandit4/inhere
/home/bandit4/inhere/-file09
/home/bandit4/inhere/-file06
/home/bandit4/inhere/-file01
/home/bandit4/inhere/-file02
/home/bandit4/inhere/-file05
/home/bandit4/inhere/-file03
/home/bandit4/inhere/-file08
/home/bandit4/inhere/-file07
/home/bandit4/inhere/-file04
/home/bandit4/inhere/-file00
[...]
bandit4@bandit:~/inhere$ cat ./-file07
koReBOKuIDDepwhWk7jZC0RTdopnAYKh
bandit4@bandit:~/inhere$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 5

In [Level5](https://overthewire.org/wargames/bandit/bandit5.html) you are given a list of properties that the file with the flag has, which are:

1. human-readable
2. 1033 bytes in size
3. not executable

And to find that file you can just use the 'find' command again.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit5@bandit.labs.overthewire.org

bandit5@bandit.labs.overthewire.org's password:
[...]

bandit5@bandit:~$ ls
inhere
bandit5@bandit:~$ cd inhere/
bandit5@bandit:~/inhere$ ls
maybehere00  maybehere01  maybehere02  maybehere03  maybehere04  maybehere05  maybehere06  maybehere07  maybehere08  maybehere09  maybehere10  maybehere11  maybehere12  maybehere13  maybehere14  maybehere15  maybehere16  maybehere17  maybehere18  maybehere19
bandit5@bandit:~/inhere$ find $(pwd) -size 1033c ! -executable
/home/bandit5/inhere/maybehere07/.file2
bandit5@bandit:~/inhere$ cat /home/bandit5/inhere/maybehere07/.file2
DXjZPULLxYr17uwoI01bNLQbtFemEgo7

bandit5@bandit:~/inhere$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 6

[Level6](https://overthewire.org/wargames/bandit/bandit6.html) is another 'find' command level, it's pretty much like the others before, just get the right parameters and you'll get the flag file.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit6@bandit.labs.overthewire.org

bandit6@bandit.labs.overthewire.org's password:
[...]

bandit6@bandit:~$ ls
bandit6@bandit:~$ find / -user bandit7 -group bandit6 -size 33c
find: ‘/run/lvm’: Permission denied
find: ‘/run/screen/S-bandit12’: Permission denied
[...]
find: ‘/var/cache/ldconfig’: Permission denied
find: ‘/var/cache/apt/archives/partial’: Permission denied
/var/lib/dpkg/info/bandit7.password
find: ‘/var/lib/apt/lists/partial’: Permission denied
find: ‘/cgroup2/csessions’: Permission denied
[...]
find: ‘/boot/lost+found’: Permission denied
bandit6@bandit:~$ cat /var/lib/dpkg/info/bandit7.password
HKBPTKQnIay4Fw76bEy8PVxKEDQRKTzs
bandit6@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 7

In [Level7](https://overthewire.org/wargames/bandit/bandit7.html) is pretty simple, as long as you're familiar with the 'grep' command. If you're not, grep is basically a command to find the line that has a specific pattern in some text. In this case the pattern is the full string that we want.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit7@bandit.labs.overthewire.org

bandit7@bandit.labs.overthewire.org's password:
[...]

bandit7@bandit:~$ ls
data.txt
bandit7@bandit:~$ cat data.txt
humiliation's	47r0YuNylaQ3k6HqGF5NsPPiGuolDCjn
malarkey's	0huyJeRwvtJaoyRmJjQFsRnQcYG4gDir
[...]
chemical	7D5J0CAJMWr2Ryb9uB0kSRuqz7BQPv6X
shaded	v5MBdtwMnmZ9YlheYVOxBJiOSxp9BeAA
bandit7@bandit:~$ grep millionth data.txt
millionth	cvX2JJa4CFALtqS87jk27qwqGhBM9plV
bandit7@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 8

On [Level8](https://overthewire.org/wargames/bandit/bandit8.html) just use the command 'uniq' to show the amount of times each string has appeared on the file.


<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit8@bandit.labs.overthewire.org

bandit8@bandit.labs.overthewire.org's password:
[...]
bandit8@bandit:~$ uniq -c data.txt
	10 07iR6PwHwihvQ3av1fqoRjICCulpoyms
	[...]
	10 uBRx9inQTeaDZAuzEb2MadWXmkH8uW4O
	 1 UsvVyFSfZZWbi6wgC7dAFyFuR6jQQUhR
	10 vBo3qbjNEF2d3meGEkRfc3mKpjtiDz1i
	[...]
	10 yXGLvp7UaeiDKxLGXQYlWuRWdIgeCaT0
	10 YzZX7E35vOa6IQ9SRUGdlEpyaiyjvWXE
bandit8@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 9

The [level9](https://overthewire.org/wargames/bandit/bandit9.html) is also a simple one, just learn one command and you'll pass, this time is the 'string' command, which "print the sequences of printable characters in files" so just run it with the file as the input.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit9@bandit.labs.overthewire.org

bandit9@bandit.labs.overthewire.org's password:
[...]
bandit9@bandit:~$ ls
data.txt
bandit9@bandit:~$ file data.txt
data.txt: data
bandit9@bandit:~$ strings data.txt
.MBB
[...]
xQf]
7li&
========== truKLdjsbJ5g7yyJ2X2R0o3a5HQJFuLk
lTq;
[...]
Cl/(;
{4x
bandit9@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 10

The [level10](https://overthewire.org/wargames/bandit/bandit10.html) is about encoded data, which is just convert information, which in this case means that our flag has to be converted back from 'base64' to a readable string, and for that we use the 'base64' command.


<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit10@bandit.labs.overthewire.org

bandit10@bandit.labs.overthewire.org's password:
[...]
bandit10@bandit:~$ ls
data.txt
bandit10@bandit:~$ cat data.txt
VGhlIHBhc3N3b3JkIGlzIElGdWt3S0dzRlc4TU9xM0lSRnFyeEUxaHhUTkViVVBSCg==
bandit10@bandit:~$ base
base32    base64    basename  
bandit10@bandit:~$ base64 -d data.txt
The password is IFukwKGsFW8MOq3IRFqrxE1hxTNEbUPR
bandit10@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 11

[Level11](https://overthewire.org/wargames/bandit/bandit11.html) is a [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) problem, you can do it by hand, you can create a script or you can just use any website that does it for you.

Btw a really good online tool for this kind of stuff is the [CyberChef](https://gchq.github.io/CyberChef/), it has A LOT of options, and you can pipe one into another, it's just so good, check it out (＾＾)ｂ.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit11@bandit.labs.overthewire.org

bandit11@bandit.labs.overthewire.org's password:
[...]
bandit11@bandit:~$ ls
data.txt
bandit11@bandit:~$ cat data.txt
Gur cnffjbeq vf 5Gr8L4qetPEsPk8htqjhRK8XSP6x2RHh
bandit11@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

btw the result from [xarg.org](https://www.xarg.org/tools/caesar-cipher/) was this: 'The password is 5Te8Y4drgCRfCx8ugdwuEX8KFC6k2EUu'

Level 12

[Level12](https://overthewire.org/wargames/bandit/bandit12.html) it takes a lot of "manual work"(maybe you can pipe it, idk... ┐(´ー｀)┌) becausue it's pretty much just decompress file after file, and if you don't know the file type of compression just use the 'file' command, after that it's just decompress all the files and 'cat' the final file.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit12@bandit.labs.overthewire.org

bandit12@bandit.labs.overthewire.org's password:
[...]
bandit12@bandit:~$ ls
data.txt
bandit12@bandit:~$ mkdir /tmp/notapasswordforthetmpdir
bandit12@bandit:~$ mv data.txt /tmp/notapasswordforthetmpdir
bandit12@bandit:~$ cd /tmp/notapasswordforthetmpdir
bandit12@bandit:/tmp/notapasswordforthetmpdir$ ls
data.txt  file
[...]
bandit12@bandit:/tmp/notapasswordforthetmpdir$ file data6.bin
data6.bin: bzip2 compressed data, block size = 900k
[...]
bandit12@bandit:/tmp/notapasswordforthetmpdir$ cat data8.bin
The password is 8ZjyCRiBWFYkneahHwxCv3wb2a1ORpYL
bandit12@bandit:/tmp/notapasswordforthetmpdir$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 13

On [level13](https://overthewire.org/wargames/bandit/bandit13.html) you'll find not a file with a flag or anything, but a 'sshkey' file, which will be used to log in the next level, to get the file in your machine you'll need to download it, with 'scp' you can make downloads trough ssh.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh -p 2220 bandit13@bandit.labs.overthewire.org

bandit13@bandit.labs.overthewire.org's password:
[...]
bandit13@bandit:~$ ls
sshkey.private
bandit13@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.

chomuske@notavalidwebsite: ~$ scp -P 2220 bandit13@bandit.labs.overthewire.org:~/sshkey.private $(pwd)
[...]
bandit13@bandit.labs.overthewire.org's password:
sshkey.private                                           100% 1679     7.0KB/s   00:00

chomuske@notavalidwebsite: ~$ cat sshkey.private
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAxkkOE83W2cOT7IWhFc9aPaaQmQDdgzuXCv+ppZHa++buSkN+
gg0tcr7Fw8NLGa5+Uzec2rEg0WmeevB13AIoYp0MZyETq46t+jk9puNwZwIt9XgB
ZufGtZEwWbFWw/vVLNwOXBe4UWStGRWzgPpEeSv5Tb1VjLZIBdGphTIK22Amz6Zb
ThMsiMnyJafEwJ/T8PQO3myS91vUHEuoOMAzoUID4kN0MEZ3+XahyK0HJVq68KsV
ObefXG1vvA3GAJ29kxJaqvRfgYnqZryWN7w3CHjNU4c/2Jkp+n8L0SnxaNA+WYA7
jiPyTF0is8uzMlYQ4l1Lzh/8/MpvhCQF8r22dwIDAQABAoIBAQC6dWBjhyEOzjeA
J3j/RWmap9M5zfJ/wb2bfidNpwbB8rsJ4sZIDZQ7XuIh4LfygoAQSS+bBw3RXvzE
pvJt3SmU8hIDuLsCjL1VnBY5pY7Bju8g8aR/3FyjyNAqx/TLfzlLYfOu7i9Jet67
xAh0tONG/u8FB5I3LAI2Vp6OviwvdWeC4nOxCthldpuPKNLA8rmMMVRTKQ+7T2VS
nXmwYckKUcUgzoVSpiNZaS0zUDypdpy2+tRH3MQa5kqN1YKjvF8RC47woOYCktsD
o3FFpGNFec9Taa3Msy+DfQQhHKZFKIL3bJDONtmrVvtYK40/yeU4aZ/HA2DQzwhe
ol1AfiEhAoGBAOnVjosBkm7sblK+n4IEwPxs8sOmhPnTDUy5WGrpSCrXOmsVIBUf
laL3ZGLx3xCIwtCnEucB9DvN2HZkupc/h6hTKUYLqXuyLD8njTrbRhLgbC9QrKrS
M1F2fSTxVqPtZDlDMwjNR04xHA/fKh8bXXyTMqOHNJTHHNhbh3McdURjAoGBANkU
1hqfnw7+aXncJ9bjysr1ZWbqOE5Nd8AFgfwaKuGTTVX2NsUQnCMWdOp+wFak40JH
PKWkJNdBG+ex0H9JNQsTK3X5PBMAS8AfX0GrKeuwKWA6erytVTqjOfLYcdp5+z9s
8DtVCxDuVsM+i4X8UqIGOlvGbtKEVokHPFXP1q/dAoGAcHg5YX7WEehCgCYTzpO+
xysX8ScM2qS6xuZ3MqUWAxUWkh7NGZvhe0sGy9iOdANzwKw7mUUFViaCMR/t54W1
GC83sOs3D7n5Mj8x3NdO8xFit7dT9a245TvaoYQ7KgmqpSg/ScKCw4c3eiLava+J
3btnJeSIU+8ZXq9XjPRpKwUCgYA7z6LiOQKxNeXH3qHXcnHok855maUj5fJNpPbY
iDkyZ8ySF8GlcFsky8Yw6fWCqfG3zDrohJ5l9JmEsBh7SadkwsZhvecQcS9t4vby
9/8X4jS0P8ibfcKS4nBP+dT81kkkg5Z5MohXBORA7VWx+ACohcDEkprsQ+w32xeD
qT1EvQKBgQDKm8ws2ByvSUVs9GjTilCajFqLJ0eVYzRPaY6f++Gv/UVfAPV4c+S0
kAWpXbv5tbkkzbS0eaLPTKgLzavXtQoTtKwrjpolHKIHUz6Wu+n4abfAIRFubOdN
/+aLoRQ0yBDRbdXMsZN/jvY44eM+xRLdRVyMmdPtP8belRi2E2aEzA==
-----END RSA PRIVATE KEY-----
</code></pre>

Level 14

On [level14](https://overthewire.org/wargames/bandit/bandit14.html) there are two things to do, first log in with the file you've downloaded from the previous level, and make a connection to the bandit machine from the bandit machine, meaning a [localhost](https://en.wikipedia.org/wiki/Localhost) connection, and in there you'll have to provide the password of the current level, which you didn't get, all you got is the sshkey file, so if you've read the [bandit13-14](https://overthewire.org/wargames/bandit/bandit14.html) page you know where to look.


<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit14@bandit.labs.overthewire.org

bandit14@bandit.labs.overthewire.org's password:
[...]
bandit14@bandit:~$ cat /etc/bandit_pass/bandit14
4wcYUJFw0k0XLShlDzztnTBHiqxU3b3e
bandit14@bandit:~$ nc localhost 30000
4wcYUJFw0k0XLShlDzztnTBHiqxU3b3e
Correct!
BfMYroe26WYalil77FoDi9qh59eK5xNr

bandit14@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 15

In [level15](https://overthewire.org/wargames/bandit/bandit15.html) you'll have to do the same thing as the previous level, but this time over 'ssl', and for that you'll have to see some different commands.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit15@bandit.labs.overthewire.org

bandit15@bandit.labs.overthewire.org's password:
[...]
bandit15@bandit:~$ ls
bandit15@bandit:~$ s_client -connect localhost:30001
-bash: s_client: command not found
bandit15@bandit:~$ openssl s_client -connect localhost:30001
CONNECTED(00000003)
depth=0 CN = localhost
[...]
    Start Time: 1562438258
    Timeout   : 7200 (sec)
    Verify return code: 18 (self signed certificate)
    Extended master secret: yes
---
BfMYroe26WYalil77FoDi9qh59eK5xNr
Correct!
cluFn7wTiGryunymYOu4RcffSxQluehd

closed
bandit15@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 16

[Level16](https://overthewire.org/wargames/bandit/bandit16.html) is kinda a combination of some of the previous levels, because you'll have to make the localhost connection trough ssl, then you'll have to pass a password there, for you to get a 'sshkey' file


<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit16@bandit.labs.overthewire.org

bandit16@bandit.labs.overthewire.org's password:
[...]
bandit16@bandit:~$ ls
bandit16@bandit:~$ nmap -p31000-32000 localhost

Starting Nmap 7.40 ( https://nmap.org ) at 2019-07-14 08:42 CEST
Nmap scan report for localhost (127.0.0.1)
Host is up (0.00036s latency).
Not shown: 999 closed ports
PORT      STATE SERVICE
31518/tcp open  unknown
31790/tcp open  unknown

Nmap done: 1 IP address (1 host up) scanned in 0.10 seconds
bandit16@bandit:~$ openssl s_client -connect localhost:31790
CONNECTED(00000003)
depth=0 CN = localhost
[...]
    Start Time: 1563086689
    Timeout   : 7200 (sec)
    Verify return code: 18 (self signed certificate)
    Extended master secret: yes
---
cluFn7wTiGryunymYOu4RcffSxQluehd
Correct!
-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAvmOkuifmMg6HL2YPIOjon6iWfbp7c3jx34YkYWqUH57SUdyJ
imZzeyGC0gtZPGujUSxiJSWI/oTqexh+cAMTSMlOJf7+BrJObArnxd9Y7YT2bRPQ
Ja6Lzb558YW3FZl87ORiO+rW4LCDCNd2lUvLE/GL2GWyuKN0K5iCd5TbtJzEkQTu
DSt2mcNn4rhAL+JFr56o4T6z8WWAW18BR6yGrMq7Q/kALHYW3OekePQAzL0VUYbW
JGTi65CxbCnzc/w4+mqQyvmzpWtMAzJTzAzQxNbkR2MBGySxDLrjg0LWN6sK7wNX
x0YVztz/zbIkPjfkU1jHS+9EbVNj+D1XFOJuaQIDAQABAoIBABagpxpM1aoLWfvD
KHcj10nqcoBc4oE11aFYQwik7xfW+24pRNuDE6SFthOar69jp5RlLwD1NhPx3iBl
J9nOM8OJ0VToum43UOS8YxF8WwhXriYGnc1sskbwpXOUDc9uX4+UESzH22P29ovd
d8WErY0gPxun8pbJLmxkAtWNhpMvfe0050vk9TL5wqbu9AlbssgTcCXkMQnPw9nC
YNN6DDP2lbcBrvgT9YCNL6C+ZKufD52yOQ9qOkwFTEQpjtF4uNtJom+asvlpmS8A
vLY9r60wYSvmZhNqBUrj7lyCtXMIu1kkd4w7F77k+DjHoAXyxcUp1DGL51sOmama
+TOWWgECgYEA8JtPxP0GRJ+IQkX262jM3dEIkza8ky5moIwUqYdsx0NxHgRRhORT
8c8hAuRBb2G82so8vUHk/fur85OEfc9TncnCY2crpoqsghifKLxrLgtT+qDpfZnx
SatLdt8GfQ85yA7hnWWJ2MxF3NaeSDm75Lsm+tBbAiyc9P2jGRNtMSkCgYEAypHd
HCctNi/FwjulhttFx/rHYKhLidZDFYeiE/v45bN4yFm8x7R/b0iE7KaszX+Exdvt
SghaTdcG0Knyw1bpJVyusavPzpaJMjdJ6tcFhVAbAjm7enCIvGCSx+X3l5SiWg0A
R57hJglezIiVjv3aGwHwvlZvtszK6zV6oXFAu0ECgYAbjo46T4hyP5tJi93V5HDi
Ttiek7xRVxUl+iU7rWkGAXFpMLFteQEsRr7PJ/lemmEY5eTDAFMLy9FL2m9oQWCg
R8VdwSk8r9FGLS+9aKcV5PI/WEKlwgXinB3OhYimtiG2Cg5JCqIZFHxD6MjEGOiu
L8ktHMPvodBwNsSBULpG0QKBgBAplTfC1HOnWiMGOU3KPwYWt0O6CdTkmJOmL8Ni
blh9elyZ9FsGxsgtRBXRsqXuz7wtsQAgLHxbdLq/ZJQ7YfzOKU4ZxEnabvXnvWkU
YOdjHdSOoKvDQNWu6ucyLRAWFuISeXw9a/9p7ftpxm0TSgyvmfLF2MIAEwyzRqaM
77pBAoGAMmjmIJdjp+Ez8duyn3ieo36yrttF5NSsJLAbxFpdlc1gvtGCWW+9Cq0b
dxviW8+TFVEBl1O4f7HVm6EpTscdDxU+bCXWkfjuRb7Dy9GOtt9JPsX8MBTakzh3
vBgsyi/sN3RqRBcGU40fOoZyfAMT8s1m/uYv52O6IgeuZ/ujbjY=
-----END RSA PRIVATE KEY-----

closed
bandit16@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 17

On [level17](https://overthewire.org/wargames/bandit/bandit17.html) you'll see a new command 'diff', wich pretty much shows you all the differences between the files passed as parameters.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit17@bandit.labs.overthewire.org

bandit17@bandit.labs.overthewire.org's password:
[...]
bandit17@bandit:~$ ls
passwords.new  passwords.old
bandit17@bandit:~$ diff passwords.new passwords.old
42c42
< kfBf3eYk5BPBRzwjqutbbfE887SVc5Yd
---
> hlbSBPAWJmL6WFDb06gpTx1pPButblOA
bandit17@bandit:~$ diff passwords.old passwords.new
42c42
< hlbSBPAWJmL6WFDb06gpTx1pPButblOA
---
> kfBf3eYk5BPBRzwjqutbbfE887SVc5Yd
bandit17@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 18

[Level18](https://overthewire.org/wargames/bandit/bandit18.html) is strange, the way I solved, which is probably not the most right way, is by downloading the file with 'scp'.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit18@bandit.labs.overthewire.org

bandit18@bandit.labs.overthewire.org's password:
[...]
chomuske@notavalidwebsite: ~$ scp -P 2220 bandit18@bandit.labs.overthewire.org:~/readme $(pwd)
This is a OverTheWire game server. More information on http://www.overthewire.org/wargames

bandit18@bandit.labs.overthewire.org's password:
readme                                             100%   33     0.1KB/s   00:00
chomuske@notavalidwebsite: ~$ ls
readme
chomuske@notavalidwebsite: ~$ cat readme
IueksS7Ubh8G3DCwVzrTd8rAVOwq3M5x
</code></pre>

Level 19

In [level19](https://overthewire.org/wargames/bandit/bandit19.html) you'll have to use a '[setuid](https://en.wikipedia.org/wiki/Setuid)' binary to run a command as the user with the proper permissions, so you can read the password file, that because of one of the previous levels you already know where they are.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit19@bandit.labs.overthewire.org

bandit19@bandit.labs.overthewire.org's password:
[...]
bandit19@bandit:~$ ls
bandit20-do
bandit19@bandit:~$ ./bandit20-do
Run a command as another user.
  Example: ./bandit20-do id
bandit19@bandit:~$ ./bandit20-do id
uid=11019(bandit19) gid=11019(bandit19) euid=11020(bandit20) groups=11019(bandit19)
bandit19@bandit:~$ ./bandit20-do cat /etc/bandit_pass/bandit20
GbKksEFF4yrVs6il55v6gwY5aVje5f0j
bandit19@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 20

On [level20](https://overthewire.org/wargames/bandit/bandit20.html) you have to see some things about background jobs.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit20@bandit.labs.overthewire.org

bandit20@bandit.labs.overthewire.org's password:
[...]
bandit20@bandit:~$ ls
suconnect
bandit20@bandit:~$ nc -l -p 22222
asdf
^Z
[1]+  Stopped                 nc -l -p 22222
bandit20@bandit:~$ jobs
[1]+  Stopped                 nc -l -p 22222
bandit20@bandit:~$ bg 1
[1]+ nc -l -p 22222 &
bandit20@bandit:~$ ./suconnect
Usage: ./suconnect <portnumber>
This program will connect to the given port on localhost using TCP. If it receives the correct password from the other side, the next password is transmitted back.
bandit20@bandit:~$ ./suconnect 22222
GbKksEFF4yrVs6il55v6gwY5aVje5f0j
^Z
[1]-  Stopped                 nc -l -p 22222

[2]+  Stopped                 ./suconnect 22222
bandit20@bandit:~$ jobs
[1]-  Stopped                 nc -l -p 22222
[2]+  Stopped                 ./suconnect 22222
bandit20@bandit:~$ bg 2
[2]+ ./suconnect 22222 &
bandit20@bandit:~$ bg 1
[1]+ nc -l -p 22222 &
bandit20@bandit:~$ fg 1
nc -l -p 22222
GbKksEFF4yrVs6il55v6gwY5aVje5f0j
Read: GbKksEFF4yrVs6il55v6gwY5aVje5f0j
Password matches, sending next password
gE269g2h3mw3pwgrj0Ha9Uoqen1c9DGr
[2]-  Done                    ./suconnect 22222
bandit20@bandit:~$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 21

On [level21](https://overthewire.org/wargames/bandit/bandit21.html) you'll have to read the files and 'cat' the right file.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit21@bandit.labs.overthewire.org

bandit21@bandit.labs.overthewire.org's password:
[...]
bandit21@bandit:~$ ls
bandit21@bandit:~$ clear

bandit21@bandit:~$ cd /etc/cron.d
bandit21@bandit:/etc/cron.d$ ls
cronjob_bandit22  cronjob_bandit23  cronjob_bandit24
bandit21@bandit:/etc/cron.d$ cat cronjob_bandit22
@reboot bandit22 /usr/bin/cronjob_bandit22.sh &> /dev/null
* * * * * bandit22 /usr/bin/cronjob_bandit22.sh &> /dev/null
bandit21@bandit:/etc/cron.d$ cat /usr/bin/cronjob_bandit22.sh
#!/bin/bash
chmod 644 /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv
cat /etc/bandit_pass/bandit22 > /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv
bandit21@bandit:/etc/cron.d$ cat /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv
Yk7owGAcWjwMVRwrTesJEwB7WVOiILLI
bandit21@bandit:/etc/cron.d$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 22

On [level22](https://overthewire.org/wargames/bandit/bandit22.html) you have to run the main part of the script with the proper name to get the directory of the flag.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit22@bandit.labs.overthewire.org

bandit22@bandit.labs.overthewire.org's password:
[...]
bandit22@bandit:~$ ls
bandit22@bandit:~$ cd /etc/cron.d
bandit22@bandit:/etc/cron.d$ ls
atop  cronjob_bandit22  cronjob_bandit23  cronjob_bandit24
bandit22@bandit:/etc/cron.d$ cat cronjob_bandit22
@reboot bandit22 /usr/bin/cronjob_bandit22.sh &> /dev/null
* * * * * bandit22 /usr/bin/cronjob_bandit22.sh &> /dev/null
bandit22@bandit:/etc/cron.d$ cat cronjob_bandit23
@reboot bandit23 /usr/bin/cronjob_bandit23.sh  &> /dev/null
* * * * * bandit23 /usr/bin/cronjob_bandit23.sh  &> /dev/null
bandit22@bandit:/etc/cron.d$ cat /usr/bin/cronjob_bandit23.sh
#!/bin/bash

myname=$(whoami)
mytarget=$(echo I am user $myname | md5sum | cut -d ' ' -f 1)

echo "Copying passwordfile /etc/bandit_pass/$myname to /tmp/$mytarget"

cat /etc/bandit_pass/$myname > /tmp/$mytarget
bandit22@bandit:/etc/cron.d$ mkdir /tmp/solution309845712309487
bandit22@bandit:/etc/cron.d$ cd /tmp/solution309845712309487
bandit22@bandit:/tmp/solution309845712309487$ ./t.sh
35964510399388ff8cd7da6f7927c82b
bandit22@bandit:/tmp/solution309845712309487$ echo bandit23 | md5sum | cut -d ' ' -f 1
35964510399388ff8cd7da6f7927c82b
bandit22@bandit:/tmp/solution309845712309487$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 23

On [level23](https://overthewire.org/wargames/bandit/bandit23.html) you're given a script that runs all the code in one directory as the user from the next level, so you'll just have to make a script to get the password from /etc/bandit_pass/bandit24.

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit23@bandit.labs.overthewire.org

bandit23@bandit.labs.overthewire.org's password:
[...]
bandit23@bandit:~$ cd /etc/cron.
cron.d/       cron.daily/   cron.hourly/  cron.monthly/ cron.weekly/  
bandit23@bandit:~$ cd /etc/cron.d
bandit23@bandit:/etc/cron.d$ ls
cronjob_bandit22  cronjob_bandit23  cronjob_bandit24
bandit23@bandit:/etc/cron.d$ cat cronjob_bandit24
@reboot bandit24 /usr/bin/cronjob_bandit24.sh &> /dev/null
* * * * * bandit24 /usr/bin/cronjob_bandit24.sh &> /dev/null
bandit23@bandit:/etc/cron.d$ cat /usr/bin/cronjob_bandit24.sh
#!/bin/bash

myname=$(whoami)

cd /var/spool/$myname
echo "Executing and deleting all scripts in /var/spool/$myname:"
for i in * .\*;
do
    if [ "$i" != "." -a "$i" != ".." ];
    then
	echo "Handling $i"
	timeout -s 9 60 ./$i
	rm -f ./$i
    fi
done
bandit23@bandit:/tmp/shiro23$ cat solution.sh
cat /etc/bandit_pass/bandit24 > /tmp/shiro23/flag.txt
bandit23@bandit:/tmp/shiro23$ chmod +x solution.sh
bandit23@bandit:/tmp/shiro23$ cp solution.sh /var/spool/bandit24/
bandit23@bandit:/tmp/shiro23$ chmod -x flag.txt
bandit23@bandit:/tmp/shiro23$ ls -lA
total 8
-rw-rw-rw- 1 bandit23 root 33 Jul 17 20:22 flag.txt
-rwxrwxrwx 1 bandit23 root 58 Jul 17 20:17 solution.sh
bandit23@bandit:/tmp/shiro23$ cat flag.txt
UoMYTrfrBFHyQXmg6gzctqAwOmw1IohZ
bandit23@bandit:/tmp/shiro23$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 24

On [level24](https://overthewire.org/wargames/bandit/bandit24.html) the thing is that you have to brute force the key, for that you can either do it by hand(really bad choice), or you can make a script to generate all the possibilities, you man have the same problem I did which was that the netcat connection doesn't stay open for enough time to run all the possibilities(idk why), so just break it down in two.

Here's the script I used to generate all the possibilities

<pre><code class="python">password = "UoMYTrfrBFHyQXmg6gzctqAwOmw1IohZ "
pin = 0000

while pin < 10000 :
	print("%s%04d"%(password, pin))
	pin +=1
</code></pre>

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit24@bandit.labs.overthewire.org

bandit24@bandit.labs.overthewire.org's password:
[...]
bandit24@bandit:/tmp/shiro24$ python s2.py > msg.txt
bandit24@bandit:/tmp/shiro24$ nc localhost 30002 < msg.txt > result.txt
bandit24@bandit:/tmp/shiro24$ uniq -c result.txt
      1 I am the pincode checker for user bandit25. Please enter the password for user bandit24 and the secret pincode on a single line, separated by a space.
   2403 Wrong! Please enter the correct pincode. Try again.
      1 Correct!
      1 The password of user bandit25 is uNG9O58gUE7snukf3bvZ0rxhtnjzSGzG
      1
      1 Exiting.
bandit24@bandit:/tmp/shiro24$ exit
logout
Connection to bandit.labs.overthewire.org closed.
</code></pre>

Level 25

Maybe in [level25](https://overthewire.org/wargames/bandit/bandit25.html) I didn't really got what was supposed to be done so once I logged in I saw the 'sshkey' file in there and I jusut download it with 'scp' and use it to log in the next level. ┐(´～｀)┌

<pre><code class="shell-session hljs less">chomuske@notavalidwebsite: ~$ ssh ssh -p 2220 bandit25@bandit.labs.overthewire.org

bandit25@bandit.labs.overthewire.org's password:
[...]
bandit25@bandit:~$ ls
bandit26.sshkey
[...]
chomuske@notavalidwebsite: ~$ scp -P 2220 bandit25@bandit.labs.overthewire.org:~/bandit26.sshkey $(pwd)
This is a OverTheWire game server. More information on http://www.overthewire.org/wargames

bandit25@bandit.labs.overthewire.org's password:
bandit26.sshkey                                   100% 1679     6.9KB/s   00:00
</code></pre>

Level 26

[Level26](https://overthewire.org/wargames/bandit/bandit26.html) is one of those that I had to look for the writteup (ノ﹏ヽ) , because I couldn't solve it, so here's the solution I've found. You have to make your terminal window small so that when the login script goes to show you their ascii art level name the name doesn't fit, in there you'll press 'v' so that you'll get in vim mode, then you'll use the ':e /etc/bandit_pass/bandit26', that'll get you the password.

The flag is : 5czgV9L3Xx8JPOyRbXh6lQbmIOWvPT6Z

That is it for now I'll update this latter with the other levels
(￣▽￣)V
