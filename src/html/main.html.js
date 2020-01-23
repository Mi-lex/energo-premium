import pageHeader from './blocks/page-header.html';
import slider from './blocks/slider.html';

const title = `Energo Premium`;
const description = `Наша компания предоставляет услуги по строительству трансформаторных подстанций`;
const keyWords = [
	'строительство подстанций',
	'трансформаторные подстанции',
	'монтаж энергоснабжения',
	'линейные объекты',
];
const author = `Mishin Alexey`;

export default function() {
	const html = `<html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,  shrink-to-fit=no">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>${title}</title>
          <meta name="description" content="${description}">
          <meta name"keywords" content="${keyWords.join(', ')}">
          <meta name="author" content="${author}">
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Oswald:500|Roboto+Condensed:300,400,700&display=swap&subset=cyrillic" rel="stylesheet">
          <link rel="stylesheet" href="./app.css">
        </head>
          <body>
              ${pageHeader}
              <main>
                  ${slider}
              </main>
          </body>
    </html>`;

	return html;
}
