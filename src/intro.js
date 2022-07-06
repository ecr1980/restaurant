import Fish from './fish.jpg';

export default function addContent(){

  const content = document.createElement('div');
  content.setAttribute('id', 'content')
  const pic = new Image();
  const brag = document.createElement('p')

  brag.innerHTML = "<em>This</em> is the best derned tootin fish you've ever eaten. It's so good, I needed to put two apostrophes in Cap'n's to give you a sense of just what you're getting here. We go all out for you on both apostrophes and flavor. You're a boat to get the best dinner of your life ya scallywag.";


  pic.src = Fish;
  pic.setAttribute("height", "640");
  pic.setAttribute("width", "960");
  pic.setAttribute("alt", "Picture of a fish dinner");

  content.appendChild(pic);
  content.appendChild(brag);

  return content;
}

