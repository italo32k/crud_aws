import json
from .models import Book
from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def book_view(request):
    
    #print(f"Request_body {request.body} {type(request.body)}")
    #print(f"Dados = {dados}")
    
    if request.method == 'POST':
    
        dados = json.loads(request.body)
        try:
            if not request.body:
                return JsonResponse({'data': 'Empty request body'}, status=400)

            Book.objects.create(
                
                autor = dados['autor'],
                titulo = dados['titulo'],
                genero = dados['genero'],
                quantidade = dados['quantidade'],
            )

            return JsonResponse({'data':'Livro criado com sucesso'},status=200)

        except Exception as error:

            return JsonResponse({'data':str(error)},status=500)
        
    elif request.method == 'GET':

        print("Chegeui no get")
        try:

            #books = Book.objects.filter()
            #books_list = list(books) 

            #QuerySet de dicionários
            queryset = Book.objects.all().values('id', 'titulo', 'autor')

            # Convertendo para lista de dicionários
            resultado = list(queryset)

            return JsonResponse({'data':resultado},status=200)

        except Exception as error:

            return JsonResponse({'data':str(error)},status=500)
        
    elif request.method == 'PUT':

        try:
            dados = json.loads(request.body)
            print(f"Dados = {dados}")
            resultado = Book.objects.filter(titulo=dados['titulo']).update(autor=dados['autor'])

            if resultado == 0:
                return JsonResponse({'data':"Nenhum arquivo encontrado!"},status=200)    

            return JsonResponse({'data':f'{resultado} registros foram atualizados!'},status=200)

        except Exception as error:

            return JsonResponse({'data':str(error)},status=500)
        
    elif request.method == 'DELETE':

        try:
            dados = json.loads(request.body)
            resultado = Book.objects.filter(titulo=dados['titulo']).delete()

            if resultado == 0:
                return JsonResponse({'data':"Nenhum arquivo encontrado!"},status=200)    

            return JsonResponse({'data':f"{resultado[0]} registros foram deletados!"},status=200)

        except Exception as error:

            return JsonResponse({'data':str(error)},status=500)