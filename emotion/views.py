from django.shortcuts import render, redirect
from .models import CatMusicScore
import random
from youtube_api import YouTubeDataAPI


# Create your views here.
def fun(request):
    if request.method=="GET":
        return render(request, 'emotion/fun.html')

    elif request.method=="POST":
        fun=request.POST.get("fun")
        sad=request.POST.get("sad")
        anger=request.POST.get("anger")
        love=request.POST.get("love")
        unrest=request.POST.get("unrest")
        lonely=request.POST.get("lonely")


        return render(request, 'emotion/fun.html',{'fun':fun,'sad':sad,'anger':anger,'love':love,'unrest':unrest,'lonely':lonely})

def sad(request):
    if request.method=="GET":
        return render(request, 'emotion/sad.html')

    elif request.method=="POST":
        fun=request.POST.get("fun")
        sad=request.POST.get("sad")
        anger=request.POST.get("anger")
        love=request.POST.get("love")
        unrest=request.POST.get("unrest")
        lonely=request.POST.get("lonely")

        return render(request, 'emotion/sad.html',{'fun':fun,'sad':sad,'anger':anger,'love':love,'unrest':unrest,'lonely':lonely})

def anger(request):
    if request.method=="GET":
        return render(request, 'emotion/anger.html')

    elif request.method=="POST":
        fun=request.POST.get("fun")
        sad=request.POST.get("sad")
        anger=request.POST.get("anger")
        love=request.POST.get("love")
        unrest=request.POST.get("unrest")
        lonely=request.POST.get("lonely")

        return render(request, 'emotion/anger.html',{'fun':fun,'sad':sad,'anger':anger,'love':love,'unrest':unrest,'lonely':lonely})
    
def love(request):
    if request.method=="GET":
        return render(request, 'emotion/love.html')

    elif request.method=="POST":
        fun=request.POST.get("fun")
        sad=request.POST.get("sad")
        anger=request.POST.get("anger")
        love=request.POST.get("love")
        unrest=request.POST.get("unrest")
        lonely=request.POST.get("lonely")

        return render(request, 'emotion/love.html',{'fun':fun,'sad':sad,'anger':anger,'love':love,'unrest':unrest,'lonely':lonely})

def lonely(request):
    if request.method=="GET":
        return render(request, 'emotion/lonely.html')

    elif request.method=="POST":
        fun=request.POST.get("fun")
        sad=request.POST.get("sad")
        anger=request.POST.get("anger")
        love=request.POST.get("love")
        unrest=request.POST.get("unrest")
        lonely=request.POST.get("lonely")

        return render(request, 'emotion/lonely.html',{'fun':fun,'sad':sad,'anger':anger,'love':love,'unrest':unrest,'lonely':lonely})

def unrest(request):
    if request.method=="GET":
        return render(request, 'emotion/unrest.html')

    elif request.method=="POST":
        fun=request.POST.get("fun")
        sad=request.POST.get("sad")
        anger=request.POST.get("anger")
        love=request.POST.get("love")
        unrest=request.POST.get("unrest")
        lonely=request.POST.get("lonely")

        return render(request, 'emotion/unrest.html',{'fun':fun,'sad':sad,'anger':anger,'love':love,'unrest':unrest,'lonely':lonely})

def final(request):

    api_key = 'AIzaSyCeqE_iNfCEEvtVEqanUUHe9eQcz9BrZHE'
    yt = YouTubeDataAPI(api_key)


    song_name=request.POST.get("song_name")
    artist_name=request.POST.get("artist_name")

    info=song_name+" "+artist_name

    searches = yt.search(q=info,max_results=5)

    
    music={'song_name':song_name,'artist_name':artist_name}
    score={"fun":fun,"sad":sad,"anger":anger,"love":love,"lonely":lonely,"unrest":unrest}

    context={
        "searches":searches[0],
        "music":music,
        "score":score,
    }

    return render(request,'emotion/final.html',context)

    
def result(request):


    fun=int(request.POST.get("fun"))
    sad=int(request.POST.get("sad"))
    anger=int(request.POST.get("anger"))
    love=int(request.POST.get("love"))
    unrest=int(request.POST.get("unrest"))
    lonely=int(request.POST.get("lonely"))

    score_sum=fun+sad+anger+love+lonely+unrest
    score_fun=round(fun/score_sum,2)
    score_sad=round(sad/score_sum,2)
    score_anger=round(anger/score_sum,2)
    score_love=round(love/score_sum,2)
    score_lonely=round(lonely/score_sum,2)
    score_unrest=round(unrest/score_sum,2)
    score={'score_fun':score_fun,'score_sad':score_sad,'score_anger':score_anger,'score_love':score_love
    ,'score_lonely':score_lonely,'score_unrest':score_unrest}

    sort_score=sorted(score.items(),key=lambda x:x[1],reverse=True)

    score_music={}
    for a in range(6):
        score_music[sort_score[a][0]]=sort_score[a][1]
               

    music={}

    for key,value in score_music.items():
        while 1:
            if(len(music)<1):
                if(value!=1.0):
                    value=value-0.01
                music=filter(key,value)
            else:break
    rand=random.randrange(0,len(music))
    context={
        "result":music[rand],
        "score":score
    }

    return render(request,'emotion/result.html',context)

def db_fun(score):
    music=CatMusicScore.objects.filter(score_fun=score)[:20]
    return music

def db_sad(score):
    music=CatMusicScore.objects.filter(score_sad=score)[:20]
    return music
def db_anger(score):
    music=CatMusicScore.objects.filter(score_anger=score)[:20]
    return music
def db_love(score):
    music=CatMusicScore.objects.filter(score_love=score)[:20]
    return music
def db_lonely(score):
    music=CatMusicScore.objects.filter(score_lonely=score)[:20]
    return music
def db_unrest(score):
    music=CatMusicScore.objects.filter(score_unrest=score)[:20]
    return music

def filter(key,value):
    music={}
    if(key=='score_fun'):
        music=db_fun(value)
    elif(key=='score_sad'):
        music=db_sad(value)
    elif(key=='score_anger'):
        music=db_anger(value)
    elif(key=='score_love'):
        music=db_love(value)
    elif(key=='score_lonely'):
        music=db_lonely(value)
    elif(key=='score_unrest'):
        music=db_unrest(value)
    return music
    




    





    

    

    

    