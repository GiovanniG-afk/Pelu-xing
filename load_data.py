import argparse
import json
import os
from pymongo import MongoClient


def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


def main():
    parser = argparse.ArgumentParser(description='Cargar eventos e invitados a MongoDB')
    parser.add_argument('--uri', help='MongoDB URI', default=os.environ.get('MONGODB_URI', 'mongodb://localhost:27017'))
    parser.add_argument('--db', help='Nombre de la BD', default='eventos_db')
    parser.add_argument('--drop', help='Borrar colecciones antes de cargar', action='store_true')
    parser.add_argument('--eventos', help='Ruta a eventos.json', default='eventos.json')
    parser.add_argument('--invitados', help='Ruta a invitados.json', default='invitados.json')
    args = parser.parse_args()

    client = MongoClient(args.uri)
    db = client.get_database(args.db)
    if args.drop:
        print('Eliminando colecciones existentes...')
        db.eventos.drop()
        db.invitados.drop()

    print(f'Cargando {args.eventos} → {args.db}.eventos')
    eventos = load_json(args.eventos)
    if isinstance(eventos, list):
        db.eventos.insert_many(eventos)
    else:
        db.eventos.insert_one(eventos)

    print(f'Cargando {args.invitados} → {args.db}.invitados')
    invitados = load_json(args.invitados)
    if isinstance(invitados, list):
        db.invitados.insert_many(invitados)
    else:
        db.invitados.insert_one(invitados)

    print('Carga completada.')


if __name__ == '__main__':
    main()