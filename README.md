# Electron and PixiJS text performance

## Electron using DOM results

Platvorm;Kaadrite sagedus sekundites (FPS)  
Windows 10 Google Chrome;20.7  
Windows 10 Mozilla Firefox;8.6 (UI jääb lühikesteks momentideks seisma, see langetab tulemust umbes 3 FPS võrra)  
Windows 10 desktop;18.0  
Linux Mint 20 desktop;17.0  


## Electron using PixiJS results

Platvorm;Kaadrite sagedus sekundites (FPS)  
Windows 10 Google Chrome;62.4  
Windows 10 Mozilla Firefox;28.4  
Windows 10 desktop;74.6  
Linux Mint 20.1 desktop;67.2 (kõigub 60 ja 80 vahel)  

### Getting started
Desktop (Electron): 
```
npm install
npm run start
```
HTML - just open index.html in the browser


### Other

Publishing
```
npm run package-linux
npm run package-win
```