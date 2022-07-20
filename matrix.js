
/*
    these functions generate the animation on start
*/


function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateName(id)
{
    var name = document.getElementById(id);
    var finalName = name.innerHTML;
    name.innerHTML = "_";
    await sleep(100);

    for(var k = 0; k < finalName.length; k++)
    {
        await sleep(10 + (Math.pow(k, 2)/2));
        name.innerHTML = finalName.slice(0, k) + "_";
    }

    await sleep(10+(Math.pow(finalName.length,2)/2));
    name.innerHTML = finalName;
}


async function animateBio(id)
{
    var char = "01001010101010110110101010101010101101010110101010101111001101010101010".split("");
    var bio = document.getElementById(id);
    var finalTxt = bio.innerHTML.split("");
    var txt = [" "]
    bio.innerHTML = txt;

    var half = Math.floor(finalTxt.length / 3);
    await sleep(500);

    for(var i = 0; i < (finalTxt.length + half); i++)
    {
        await sleep(10 + (Math.pow(i / 50,  2.75))/4);

        if(i < finalTxt.length)
        {
            if("., '".includes(finalTxt[i]))
            {
                txt[i] = finalTxt[i];
            }
            else
            {
                txt[i] = char[Math.floor(Math.random()*char.length)];
            }
        }

        if(i % 4 == 0)
        {
            for(var j = Math.max(0, (i - half)); j < Math.min(finalTxt.length, i); j++)
            {
                if(!"., '".includes(finalTxt[j]))
                {
                    txt[j] = char[Math.floor(Math.random()*char.length)];
                }
            }
        }

        if(i >= half)
        {
            txt[i - half] = finalTxt[Math.floor(i - half)];
            bio.innerHTML = "<span class='done'>" + txt.join("").slice(0, i - half) + "</span>" + txt.join("").slice(i - half);
        }
        else
        {
            bio.innerHTML = txt.join("");
        }
    }
}

animateName("cat");
animateBio("bio");
animateName("name");
