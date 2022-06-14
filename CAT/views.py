from django.shortcuts import render

def cat(request):
    
    
    if request.method=="GET":
        return render(request, 'index.html')
    
    elif request.method=="POST":
        fun=request.POST.get("fun")
        sad=request.POST.get("sad")
        anger=request.POST.get("anger")
        love=request.POST.get("love")
        unrest=request.POST.get("unrest")
        lonely=request.POST.get("lonely")

        return render(request, 'index.html',{'fun':fun,'sad':sad,'anger':anger,'love':love,'unrest':unrest,'lonely':lonely})
