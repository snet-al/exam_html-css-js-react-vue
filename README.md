# Exam_html-css-js-react-vue

### Store folder
Ne folderin store ndodhet nje file js qe permban dummyArray. Array eshte krijuar me ane te nje loopi ne menyre qe gjatesia e tij te jete e ndryshueshme per te lehtesuar testimet.
Ne fund e kam vendosur gjatesine 100

### Utils
Ne folderin utils ndodhet vetem nje file imageSelector.js qe eshte i perkohshem. DummyArray ka gjatesine 100 elemente me id nga 1 ne 100. 
Funksioni selectRandomImage i ben shuffle imazheve ne menyre qe te merren 4 random.
Funksioni remainingImages ben kontrollin e imazheve ne menyre qe te mos kemi perseritje.
(Per implementimin me ane te api nuk besoj se eshte i nevojshem pasi numri i imazheve eshte shume i madh dhe shancet per te pasur nje imazh te perserit jane shume te vogla)

### FetchButton dhe MorePhotosButton
Jane dy butona qe kane funksion shume te ngjashem. Fetch shfaq 4 imazhe te reja(i fshin te gjitha imazhet e meparshme), ndersa MorePhotos shton 4 imazhe te reja.
Imazhet jane ruajtur ne useState ne Content.jsx dhe i ka kaluar buttonave si props. Gjithashtu imazhet jane ruajtur ne sessionMemory, ne menyre qe imazhet  te mos fshihen sa here qe shtyp nje link qe te ben redirect.

### ToggleButton
ToggleButton eshte butoni qe i kthen imazhet greycsale. Gjendja e tij eshte ruajtur ne useState ne HomePage, sepse do te perdoret nga ImageContainer. Kur butoni eshte aktiv 
img brenda klases image-container merr nje klase te dyte image-greyscale qe e kthen greyscale.
