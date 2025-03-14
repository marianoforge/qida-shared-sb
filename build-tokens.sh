#!/bin/bash

# Colores para la salida
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Generando tokens de diseño ===${NC}"
echo -e "${YELLOW}Ejecutando: node src/tokens/build-tokens.mjs${NC}"

# Ejecutar el script de generación de tokens
node src/tokens/build-tokens.mjs

# Verificar si el comando se ejecutó correctamente
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Tokens generados correctamente${NC}"
    echo -e "${BLUE}Archivos generados:${NC}"
    echo -e "  - src/tokens/dist/variables.css"
    echo -e "  - src/tokens/dist/tokens.js"
    
    # Verificar si los archivos existen
    if [ -f "src/tokens/dist/variables.css" ] && [ -f "src/tokens/dist/tokens.js" ]; then
        echo -e "${GREEN}✅ Archivos verificados${NC}"
    else
        echo -e "${YELLOW}⚠️ Advertencia: Algunos archivos no se encontraron${NC}"
    fi
else
    echo -e "${YELLOW}❌ Error al generar tokens${NC}"
    exit 1
fi

echo -e "${BLUE}=== Proceso completado ===${NC}" 