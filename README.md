
# C.C-Bot

<a href="https://visitor-badge.glitch.me/badge?page_id=Fokusdotid/Family-MD"><img title="Visitor" src="https://visitor-badge.glitch.me/badge?page_id=Fokusdotid/Family-MD"></a>
<a href="https://github.com/Fokusdotid/Family-MD/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Fokusdotid/Family-MD?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/Fokusdotid/Family-MD/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/Fokusdotid/Family-MD?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/Fokusdotid/Family-MD/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/Fokusdotid/Family-MD?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/Fokusdotid/Family-MD/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/Fokusdotid/Family-MD?label=Contributors&color=blue&style=flat-square"></a>
<a href="https://github.com/Fokusdotid/Family-MD/issues"><img title="Issues" src="https://img.shields.io/github/issues/Fokusdotid/Family-MD?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/Fokusdotid/Family-MD/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/Fokusdotid/Family-MD?label=Issues&color=red&style=flat-square"></a>
<a href="https://github.com/Fokusdotid/Family-MD/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/Fokusdotid/Family-MD?label=PullRequest&color=success&style=flat-square"></a>
<a href="https://github.com/Fokusdotid/Family-MD/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/Fokusdotid/Family-MD?label=PullRequest&color=red&style=flat-square"></a>


[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Fokusdotid/Family-MD)
## Join Discussion Group
[![BOT DISCUSSION GROUP](https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/Fm6gRtvuCDN9abXVlfekAK) 
**NO BOT**

## Bot Discussion Group
[![BOT DISCUSSION GROUP](https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/BC3ZpPCD3khLhuEBNn47Ko)

## INSTALLATION FOR WINDOWS/VPS/RDP USERS

* Download & Install Git [`Click Here`](https://git-scm.com/downloads)
* Download & Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download & Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget to Add FFmpeg to the PATH environment variable**)
* Download & Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/alvino-prog/C.C-MD.git
cd C.C-MD
npm i
node .
```

---------

## For Termux Users

* Download Termux [`Click Here`](https://github.com/termux/termux-app/releases/download/v0.118.0/termux-app_v0.118.0+github-debug_universal.apk)

```
$ pkg update && upgrade -y
$ apt update && upgrade -y
$ pkg install ffmpeg
$ pkg install nodejs-lts
$ pkg install git
$ git clone https://github.com/alvino-prog/C.C-MD.git
$ cd C.C-MD
$ npm i
$ node .
```
---------

## FOR HEROKU USERS

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/mcollina/heroku-buildpack-imagemagick.git

## SETTINGS
To add or edit owner go to `settings/owner.json` Include sc source required!!

Make sure to read `Q&A.txt` in main folder okay

---------
## Arguments `node . [--options] [<session name>]` 

### `--session <nama file>`

using session from a different filename, default `session.data.json`

example file name `family.json` then use `node . --session 'family'`

### `--prefix <prefix>`

* `prefixes` separated by individual characters
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--db <url mongodb kamu>`

Open the package.json file and enter your mongodb url in the `mongo: --db mongodb url` section!

### `--db <json-server-url>`

use external db instead of local db, **recommended** use mongodb

example server with mongodb `mongodb+srv://<username>:<password>@name-of-your-db.thhce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

example server with repl `https://json-server.nurutomo.repl.co/`

code: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

the server must have specifications like this

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

If small unicode qr doesn't support

### `--img`

Enable image checker via terminal

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```
#### Thanks To 
**Allah SWT**,

**Orang Tua**,

**All Team Bot Discussion**,

**Every supporter**

##### Special Thanks to
[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)

##### Rewriter
[![Fokus ID](https://github.com/fokusdotid.png?size=100)](https://github.com/fokusdotid)
[![Pino](https://github.com/alvino-prog.png?size=100)](https://github.com/alvino-prog)

###### Collaborator

[![RHns](https://github.com/imrhns.png?size=100)](https://github.com/imrhns)
[![M imam Adi](https://github.com/adi-officiall.png?size=100)](https://github.com/adi-officiall)
[![Aniq](https://github.com/aniq12.png?size=100)](https://github.com/aniq12)

