document.addEventListener('DOMContentLoaded', function() {
    const gradoSelect = document.getElementById('grado');
    const aprendizajeSelect = document.getElementById('aprendizaje');
    const cursoSelect = document.getElementById('curso');
    const temaSelect = document.getElementById('tema');
    const materialDiv = document.getElementById('material');

    // Incluye URLs o rutas para cada recurso
const materiales = {
        'grado_1': {
            'ccss': {
                'introduccion_a_la_economia': {
                    'auditivo': 'assets/audio/1/intr_Eco.mpeg',
                    'visual': 'assets/video/1/intr_Eco1.mp4',
                    'verbal': 'assets/pdf/1/economia.pdf'
                },
                'historia_antigua': {
                    'auditivo': 'assets/audio/1/historia_antigua.mepg',
                    'visual': 'assets/video/1/La Edad Antigua _ Vídeos Educativos para Niños(360P).mp4',
                    'verbal': 'assets/pdf/1/edad antigua.pdf'
                }
            },
            'cyt': {
                'introduccion_a_la_biologia': {
                    'auditivo': 'assets/audio/1/¿QUE ES LA BIOLOGÍA_ en minutos(MP3_160K).mp3',
                    'visual': 'assets/video/1/¿QUE ES LA BIOLOGÍA_ en minutos(360P).mp4',
                    'verbal': 'assets/pdf/que es la biologia.pdf'
                },
            },
            'comu': {
                'tipos_de_texto': {
                    'auditivo': 'assets/audio/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(MP3_160K).mp3',
                    'visual': 'assets/video/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(360P).mp4',
                    'verbal': 'assets/pdf/1/el texto.pdf'
                }
            },
            'dpcc': {
                'habilidades_sociales': {
                    'auditivo': 'assets/audio/1/Qué son las Habilidades Sociales y cómo desarrollarlas(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué son las Habilidades Sociales y cómo desarrollarlas(360P).mp4',
                    'verbal': 'assets/pdf/1/habilidades sociales.pdf'
                }
            },
            'ept': {
                'Metodo_desing-thinking': {
                    'auditivo': 'assets/audio/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(360P).mp4',
                    'verbal': 'assets/pdf/1/Design Thinking'
                }
            },
            'ing': {
                'presentaciones_y_saludos': {
                    'auditivo': 'assets/audio/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](MP3_160K).mp3',
                    'visual': 'assets/video/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](360P).mp4',
                    'verbal': 'assets/pdf/1/saludos en ingles.pdf'
                }
            },
            'mate': {
                'Numeros_enteros': {
                    'auditivo': 'assets/audio/1/NÚMEROS NATURALES Super facil - Para principiantes(MP3_160K).mp3',
                    'visual': 'assets/video/1/NÚMEROS NATURALES Super facil - Para principiantes(360P).mp4',
                    'verbal': 'assets/pdf/1/NUMEROS ENTEROS.pdf',
                }
            },
            'rel': {
                'Historia_de_las_religiones': {
                    'auditivo': 'assets/audio/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(MP3_160K).mp3',
                    'visual': 'assets/video/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(360P).mp4',
                    'verbal': 'assets/pdf/1/historia de las religiones.pdf'
                }
            }
        },
        'grado_2': {
            'ccss': {
                'Edad_media': {
                    'auditivo': 'assets/audio/2/Edad Media en 10 minutos(MP3_160K).mp3',
                    'visual': 'assets/video/2/Edad Media en 10 minutos(MP3_160K).mp4',
                    'verbal': 'assets/pdf/2/edad media.pdf',
                }
            },
            'cyt': {
                'Taconomia': {
                    'auditivo': 'assets/audio/2/🌿5 Reinos y 3 Dominios de la Vida🐠 _ Clasificación de los seres vivos_ [Fácil y Rápido] _ BIOLOGÍA _(MP3_160K).mp3',
                    'visual': 'assets/video/2/🌿5 Reinos y 3 Dominios de la Vida🐠 _ Clasificación de los seres vivos_ [Fácil y Rápido] _ BIOLOGÍA _(360P).mp4',
                    'verbal': 'assets/pdf/que es la biologia.pdf'
                },
            },
            'comu': {
                'generos_literarios': {
                    'auditivo': 'assets/audio/2/📚 Los GÉNEROS LITERARIOS y sus CARACTERÍSTICAS para NIÑOS de PRIMARIA(MP3_160K).mp3',
                    'visual': 'assets/video/2/📚 Los GÉNEROS LITERARIOS y sus CARACTERÍSTICAS para NIÑOS de PRIMARIA(360P).mp4',
                    'verbal': 'assets/pdf/2/GÉNEROS LITERARIOS.pdf'
                }
            },
            'dpcc': {
                'resolucion_De_conflictos': {
                    'auditivo': 'assets/audio/2/Resolución de Conflictos(MP3_160K).mp3',
                    'visual': 'assets/video/2/Resolución de Conflictos(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'ept': {
                'Metodo_desing-thinking': {
                    'auditivo': 'assets/audio/2/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(MP3_160K).mp3',
                    'visual': 'assets/video/2/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(360P).mp4',
                    'verbal': 'assets/pdf/2/Design Thinking.pdf'
                }
            },
            'ing': {
                'presents continous': {
                    'auditivo': 'assets/audio/2/PRESENT CONTINUOUS (EXPLICACIÓN   PRÁCTICA) - INGLÉS PARA NIÑOS CON MR.PEA - ENGLISH FOR KIDS(MP3_160K).mp3',
                    'visual': 'assets/video/2/PRESENT CONTINUOUS (EXPLICACIÓN   PRÁCTICA) - INGLÉS PARA NIÑOS CON MR.PEA - ENGLISH FOR KIDS(360P).mp4',
                    'verbal': 'assets/pdf/2/PRESENT CONTINOUS.pdf'
                }
            },
            'mate': {
                'Ecuaciones': {
                    'auditivo': 'assets/audio/2/¿Cómo se resuelven las Ecuaciones_ _ Videos Educativos Aula365(MP3_160K).mp3',
                    'visual': 'assets/video/2/¿Cómo se resuelven las Ecuaciones_ _ Videos Educativos Aula365(360P).mp4',
                    'verbal': 'assets/pdf/2/ecuaciones.pdf'
                }
            },
            'rel': {
                'iglesia_ortodoxa_y_la_catolica': {
                    'auditivo': 'assets/audio/2/El Gran Cisma_ La Ruptura entre la IGLESIA ORTODOXA y la IGLESIA CATÓLICA ✝️ (Año 1054)(MP3_160K).mp3',
                    'visual': 'assets/video/2/El Gran Cisma_ La Ruptura entre la IGLESIA ORTODOXA y la IGLESIA CATÓLICA ✝️ (Año 1054)(360P).mp4',
                    'verbal': 'assets/pdf/2/RUPTURA DE LA IGLSIA ORTODOXA Y CATOLICA.pdf'
                }
            }

        },
        'grado_3': {
            'ccss': {
                'renacimiento': {
                    'auditivo': 'assets/audio/3/El Renacimiento en 10 minutos_(MP3_160K).mp3',
                    'visual': 'assets/video/2/.mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'cyt': {
                'introduccion_a_la_quimica': {
                    'auditivo': 'assets/audio/3/Introducción a la química básica(MP3_160K).mp3',
                    'visual': 'assets/video/3/.mp4',
                    'verbal': 'assets/pdf/que es la biologia.pdf'
                },
            },
            'comu': {
                'analisis literarios': {
                    'auditivo': 'assets/audio/3/Análisis Literario(MP3_160K).mp3',
                    'visual': 'assets/video/3/.mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'dpcc': {
                'estereotipos': {
                    'auditivo': 'assets/audio/3/¿Qué son los Estereotipos_(MP3_160K).mp3',
                    'visual': 'assets/video/3/¿Qué son los Estereotipos_(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'ept': {
                'formulamos_desafio_y_empatizamos': {
                    'auditivo': 'assets/audio/3/SEMANA 1 EPT 3RO Y 4TO _ EXPERIENCIA DE APRENDIZAJE 1 _ INTRODUCCIÓN(MP3_160K).mp3',
                    'visual': 'assets/video/3/SEMANA 1 EPT 3RO Y 4TO _ EXPERIENCIA DE APRENDIZAJE 1 _ INTRODUCCIÓN(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'ing': {
                'future perfect': {
                    'auditivo': 'assets/audio/3/FUTURE PERFECT EN INGLÉS_ EXPLICACIÓN SIMPLE Y EJERCICIOS - INGLÉS PARA NIÑOS CON MR.PEA(MP3_160K).mp3',
                    'visual': 'assets/video/3/FUTURE PERFECT EN INGLÉS_ EXPLICACIÓN SIMPLE Y EJERCICIOS - INGLÉS PARA NIÑOS CON MR.PEA(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'mate': {
                'sistema de ecuaciones': {
                    'auditivo': 'assets/audio/3/RESOLVER SISTEMAS DE ECUACIONES MÉTODO DE SUSTITUCIÓN Super fácil - Para principiantes(MP3_160K).mp3',
                    'visual': 'assets/video/3/RESOLVER SISTEMAS DE ECUACIONES MÉTODO DE SUSTITUCIÓN Super fácil - Para principiantes(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'rel': {
                'Historia_de_la_iglesia': {
                    'auditivo': 'assets/audio/3/HISTORIA DE LA IGLESIA EN (CASI) 10 MINUTOS(MP3_160K).mp3',
                    'visual': 'assets/video/3/HISTORIA DE LA IGLESIA EN (CASI) 10 MINUTOS(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            }
        },
        'grado_4': {
            'ccss': {
                'edad_contemporanea': {
                    'auditivo': 'assets/audio/4/✅ La EDAD CONTEMPORÁNEA en 15 minutos _ Resumen fácil y divertido(MP3_160K).mp3',
                    'visual': 'assets/video/4/✅ La EDAD CONTEMPORÁNEA en 15 minutos _ Resumen fácil y divertido(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'cyt': {
                'introduccion_a_la_biologia': {
                    'auditivo': 'assets/audio/4/¿QUE ES LA BIOLOGÍA_ en minutos(MP3_160K).mp3',
                    'visual': 'assets/video/4/¿QUE ES LA BIOLOGÍA_ en minutos(360P).mp4',
                    'verbal': 'assets/pdf/que es la biologia.pdf'
                },
            },
            'comu': {
                'producciono_de_texto': {
                    'auditivo': 'assets/audio/4/Etapas de producción de cualquier tipo de texto (Educación)(MP3_160K).mp3',
                    'visual': 'assets/video/4/Etapas de producción de cualquier tipo de texto (Educación)(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'dpcc': {
                'poderes_del_estado': {
                    'auditivo': 'assets/audio/4/Los 3 poderes del Estado ¿Qué es el poder Ejecutivo_ Legislativo y Judicial_(MP3_160K).mp3',
                    'visual': 'assets/video/4/Los 3 poderes del Estado ¿Qué es el poder Ejecutivo_ Legislativo y Judicial_(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'ept': {
                'metodo_da_vinci': {
                    'auditivo': 'assets/audio/4/TÉCNICA DA VINCI(MP3_160K).mp3',
                    'visual': 'assets/video/4/TÉCNICA DA VINCI(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'ing': {
                'auxiliares': {
                    'auditivo': 'assets/audio/4/Así se usan los auxiliares DO y DOES en inglés - Presente Simple _ Clases inglés(MP3_160K).mp3',
                    'visual': 'assets/video/4/Así se usan los auxiliares DO y DOES en inglés - Presente Simple _ Clases inglés(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'mate': {
                'logaritmos': {
                    'auditivo': 'assets/audio/4/LOGARITMOS Super fácil - Para principiantes(MP3_160K).mp3',
                    'visual': 'assets/video/4/LOGARITMOS Super fácil - Para principiantes(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'rel': {
                'Sacramentos': {
                    'auditivo': 'assets/audio/4/nº 224 ¿Qué son los sacramentos y cuántos hay_(MP3_160K).mp3',
                    'visual': 'assets/video/4/nº 224 ¿Qué son los sacramentos y cuántos hay_(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            }
        },
        'grado_5': {
            'ccss': {
                'Politica_contamporanea': {
                    'auditivo': 'assets/audio/5/LA EDAD CONTEMPORÁNEA en minutos(MP3_160K).mp3',
                    'visual': 'assets/video/5/LA EDAD CONTEMPORÁNEA en minutos(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'cyt': {
                'herramientas_del_laboratorio': {
                    'auditivo': 'assets/audio/5/NOMBRE de los INSTRUMENTOS de LABORATORIO ⚗ _ Lista de aparatos de laboratorio en ESPAÑOL ✅(MP3_160K).mp3',
                    'visual': 'assets/video/5/NOMBRE de los INSTRUMENTOS de LABORATORIO ⚗ _ Lista de aparatos de laboratorio en ESPAÑOL ✅(360P).mp4',
                    'verbal': 'assets/pdf/que es la biologia.pdf'
                },
            },
            'comu': {
                'como_hacer_un_articulo_De_opinion': {
                    'auditivo': 'assets/audio/5/Cómo redactar un artículo de opinión _ Comprensión y Producción de Textos(MP3_160K).mp3',
                    'visual': 'assets/video/5/Cómo redactar un artículo de opinión _ Comprensión y Producción de Textos(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'dpcc': {
                'derechos y deberes': {
                    'auditivo': 'assets/audio/5/Derechos y Deberes(MP3_160K).mp3',
                    'visual': 'assets/video/5/Cómo redactar un artículo de opinión _ Comprensión y Producción de Textos(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'ept': {
                'storyboard': {
                    'auditivo': 'assets/audio/5/STORYBOARD - ¿Qué es y cómo se hace_(MP3_160K).mp3',
                    'visual': 'assets/video/5/STORYBOARD - ¿Qué es y cómo se hace_(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'ing': {
                'weather': {
                    'auditivo': 'assets/audio/5/EL TIEMPO METEOROLÓGICO EN INGLÉS (THE WEATHER)  - APRENDE INGLÉS CON MR PEA (ENGLISH FOR KIDS)(MP3_160K).mp3',
                    'visual': 'assets/video/5/EL TIEMPO METEOROLÓGICO EN INGLÉS (THE WEATHER)  - APRENDE INGLÉS CON MR PEA (ENGLISH FOR KIDS)(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'mate': {
                'interes simple': {
                    'auditivo': 'assets/audio/5/INTERÉS SIMPLE Super facil - Para principiantes(MP3_160K).mp3',
                    'visual': 'assets/video/5/INTERÉS SIMPLE Super facil - Para principiantes(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            },
            'rel': {
                'magisterio_de_la_iglesia': {
                    'auditivo': 'assets/audio/5/MAGISTERIO DE LA IGLESIA(MP3_160K).mp3',
                    'visual': 'assets/video/5/MAGISTERIO DE LA IGLESIA(360P).mp4',
                    'verbal': 'assets/pdf/'
                }
            }
        }
    };

    function actualizarTemas() {
        const grado = gradoSelect.value;
        const curso = cursoSelect.value;
        temaSelect.innerHTML = '<option value="">Selecciona un tema</option>';
        if (grado && curso && materiales[grado] && materiales[grado][curso]) {
            Object.keys(materiales[grado][curso]).forEach(tema => {
                const option = document.createElement('option');
                option.value = tema;
                option.textContent = tema.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                temaSelect.appendChild(option);
            });
        }
    }

    function mostrarMaterial() {
        const grado = gradoSelect.value;
        const aprendizaje = aprendizajeSelect.value;
        const curso = cursoSelect.value;
        const tema = temaSelect.value;

        if (grado && aprendizaje && curso && tema) {
            const material = materiales[grado] && materiales[grado][curso] && materiales[grado][curso][tema];
            
            if (material) {
                let contenido = '';

                if (aprendizaje === 'auditivo' && material.auditivo) {
                    contenido = `<audio class="audio" controls><source src="${material.auditivo}" type="audio/mpeg">Tu navegador no soporta el elemento de audio.</audio>`;
                } else if (aprendizaje === 'visual' && material.visual) {
                    contenido = `<video class="video" controls><source src="${material.visual}" type="video/mp4">Tu navegador no soporta el elemento de video.</video>`;
                } else if (aprendizaje === 'verbal' && material.verbal) {
                    contenido = `<a href="${material.verbal}" target="_blank">Descargar PDF del material verbal</a>`;
                } else if (aprendizaje === 'multimodal' && material.multimodal) {
                    contenido = `<a href="${material.multimodal}" target="_blank">Descargar material multimodal</a>`;
                }

                materialDiv.innerHTML = `<br>Curso: ${curso.replace(/_/g, ' ')}<br>Tema: ${tema.replace(/_/g, ' ')}<br>${contenido}`;
            } else {
                materialDiv.innerHTML = 'Material no disponible para la combinación seleccionada.';
            }
        } else {
            materialDiv.innerHTML = '';
        }
    }

    gradoSelect.addEventListener('change', function() {
        actualizarTemas();
        mostrarMaterial();
    });

    cursoSelect.addEventListener('change', function() {
        actualizarTemas();
        mostrarMaterial();
    });

    aprendizajeSelect.addEventListener('change', mostrarMaterial);
    temaSelect.addEventListener('change', mostrarMaterial);
});
