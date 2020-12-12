# VOOT Unofficial API

### Prerequisites

- nodejs

## Installation

```
npm install
```

### Start the Server

```
npm start
```

Usage

## API END POINT(GET REQUEST)

### Paste Voot Movie or Shows Link

```
http://localhost:5000/info?url=https://www.voot.com/movies/gultoo/638532
```

### RESULT

```
{
  "result": {
    "mediaId": "638532",
    "name": "Gultoo",
    "entryId": "0_f2mhnezq",
    "description": "Alok is a pro hacker and a favourite among his college friends who are looking for some quick tech tips. While he uses his skills to impress his lady love, little does he know that danger is lurking around the corner. He finds himself trapped when some highly confidential data from a multinational company gets hacked. Who's the mastermind behind this? Is Alok the player or is he being played on? Watch Gultoo only on Voot and solve this mystery...",
    "downloadUrl": "https://cdnapisec.kaltura.com/p/1982551/playManifest/pt/https/f/applehttp/t/web/e/0_f2mhnezq"
  }
}
```

### you can use youtube-dl or ffmpeg to Download

## Issues

- Shows which is not Premiered in Televison will not work
