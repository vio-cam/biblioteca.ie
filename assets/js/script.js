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
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                },
                'historia_antigua': {
                    'auditivo': 'assets/audio/1/historia_antigua.mepg',
                    'visual': 'assets/video/1/La Edad Antigua _ Vídeos Educativos para Niños(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'cyt': {
                'introduccion_a_la_biologia': {
                    'auditivo': 'assets/audio/1/¿QUE ES LA BIOLOGÍA_ en minutos(MP3_160K).mp3',
                    'visual': 'assets/video/1/¿QUE ES LA BIOLOGÍA_ en minutos(360P).mp4',
                    'verbal': 'assets/pdf/que es la biologia.pdf',
                    'multimodal': 'assets/pdf/'
                },
            },
            'comu': {
                'tipos_de_texto': {
                    'auditivo': 'assets/audio/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(MP3_160K).mp3',
                    'visual': 'assets/video/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(360P)',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'dpcc': {
                'autestima_y_habilidades_sociales': {
                    'auditivo': 'assets/audio/1/Qué son las Habilidades Sociales y cómo desarrollarlas(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué son las Habilidades Sociales y cómo desarrollarlas(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'ept': {
                'Metodo_desing-thinking': {
                    'auditivo': 'assets/audio/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'ing': {
                'presentaciones_y_saludos': {
                    'auditivo': 'assets/audio/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](MP3_160K).mp3',
                    'visual': 'assets/video/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'mate': {
                'Numeros_enteros': {
                    'auditivo': 'assets/audio/1/NÚMEROS NATURALES Super facil - Para principiantes(MP3_160K).mp3',
                    'visual': 'assets/video/1/NÚMEROS NATURALES Super facil - Para principiantes(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'rel': {
                'Historia_de_las_religiones': {
                    'auditivo': 'assets/audio/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(MP3_160K).mp3',
                    'visual': 'assets/video/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            }
        },
        'grado_2': {
            'ccss': {
                'Edad_media': {
                    'auditivo': 'assets/audio/1/intr_Eco.mpeg',
                    'visual': 'assets/video/1/intr_Eco1.mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'cyt': {
                'introduccion_a_la_biologia': {
                    'auditivo': 'assets/audio/1/¿QUE ES LA BIOLOGÍA_ en minutos(MP3_160K).mp3',
                    'visual': 'assets/video/1/¿QUE ES LA BIOLOGÍA_ en minutos(360P).mp4',
                    'verbal': 'assets/pdf/que es la biologia.pdf',
                    'multimodal': 'assets/pdf/'
                },
            },
            'comu': {
                'generos_literarios': {
                    'auditivo': 'assets/audio/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(MP3_160K).mp3',
                    'visual': 'assets/video/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(360P)',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'dpcc': {
                'autoevaluacion': {
                    'auditivo': 'assets/audio/1/Qué son las Habilidades Sociales y cómo desarrollarlas(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué son las Habilidades Sociales y cómo desarrollarlas(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'ept': {
                'Metodo_desing-thinking': {
                    'auditivo': 'assets/audio/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'ing': {
                'presents continous': {
                    'auditivo': 'assets/audio/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](MP3_160K).mp3',
                    'visual': 'assets/video/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'mate': {
                'Ecuaciones': {
                    'auditivo': 'assets/audio/1/NÚMEROS NATURALES Super facil - Para principiantes(MP3_160K).mp3',
                    'visual': 'assets/video/1/NÚMEROS NATURALES Super facil - Para principiantes(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'rel': {
                'la_iglesia_y_sus_divisiones': {
                    'auditivo': 'assets/audio/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(MP3_160K).mp3',
                    'visual': 'assets/video/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            }

        },
        'grado_3': {
            'ccss': {
                'introduccion_a_la_economia': {
                    'auditivo': 'assets/audio/1/intr_Eco.mpeg',
                    'visual': 'assets/video/1/intr_Eco1.mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                },
                'historia_antigua': {
                    'auditivo': 'assets/audio/1/historia_antigua.mepg',
                    'visual': 'assets/video/1/La Edad Antigua _ Vídeos Educativos para Niños(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'cyt': {
                'introduccion_a_la_biologia': {
                    'auditivo': 'assets/audio/1/¿QUE ES LA BIOLOGÍA_ en minutos(MP3_160K).mp3',
                    'visual': 'assets/video/1/¿QUE ES LA BIOLOGÍA_ en minutos(360P).mp4',
                    'verbal': 'assets/pdf/que es la biologia.pdf',
                    'multimodal': 'assets/pdf/'
                },
            },
            'comu': {
                'tipos_de_texto': {
                    'auditivo': 'assets/audio/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(MP3_160K).mp3',
                    'visual': 'assets/video/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(360P)',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'dpcc': {
                'autestima_y_habilidades_sociales': {
                    'auditivo': 'assets/audio/1/Qué son las Habilidades Sociales y cómo desarrollarlas(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué son las Habilidades Sociales y cómo desarrollarlas(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'ept': {
                'Metodo_desing-thinking': {
                    'auditivo': 'assets/audio/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'ing': {
                'presentaciones_y_saludos': {
                    'auditivo': 'assets/audio/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](MP3_160K).mp3',
                    'visual': 'assets/video/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'mate': {
                'Numeros_enteros': {
                    'auditivo': 'assets/audio/1/NÚMEROS NATURALES Super facil - Para principiantes(MP3_160K).mp3',
                    'visual': 'assets/video/1/NÚMEROS NATURALES Super facil - Para principiantes(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'rel': {
                'Historia_de_las_religiones': {
                    'auditivo': 'assets/audio/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(MP3_160K).mp3',
                    'visual': 'assets/video/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            }
        },
        'grado_4': {
            'ccss': {
                'introduccion_a_la_economia': {
                    'auditivo': 'assets/audio/1/intr_Eco.mpeg',
                    'visual': 'assets/video/1/intr_Eco1.mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                },
                'historia_antigua': {
                    'auditivo': 'assets/audio/1/historia_antigua.mepg',
                    'visual': 'assets/video/1/La Edad Antigua _ Vídeos Educativos para Niños(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'cyt': {
                'introduccion_a_la_biologia': {
                    'auditivo': 'assets/audio/1/¿QUE ES LA BIOLOGÍA_ en minutos(MP3_160K).mp3',
                    'visual': 'assets/video/1/¿QUE ES LA BIOLOGÍA_ en minutos(360P).mp4',
                    'verbal': 'assets/pdf/que es la biologia.pdf',
                    'multimodal': 'assets/pdf/'
                },
            },
            'comu': {
                'tipos_de_texto': {
                    'auditivo': 'assets/audio/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(MP3_160K).mp3',
                    'visual': 'assets/video/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(360P)',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'dpcc': {
                'autestima_y_habilidades_sociales': {
                    'auditivo': 'assets/audio/1/Qué son las Habilidades Sociales y cómo desarrollarlas(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué son las Habilidades Sociales y cómo desarrollarlas(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'ept': {
                'Metodo_desing-thinking': {
                    'auditivo': 'assets/audio/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'ing': {
                'presentaciones_y_saludos': {
                    'auditivo': 'assets/audio/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](MP3_160K).mp3',
                    'visual': 'assets/video/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'mate': {
                'Numeros_enteros': {
                    'auditivo': 'assets/audio/1/NÚMEROS NATURALES Super facil - Para principiantes(MP3_160K).mp3',
                    'visual': 'assets/video/1/NÚMEROS NATURALES Super facil - Para principiantes(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'rel': {
                'Historia_de_las_religiones': {
                    'auditivo': 'assets/audio/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(MP3_160K).mp3',
                    'visual': 'assets/video/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            }
        },
        'grado_5': {
            'ccss': {
                'introduccion_a_la_economia': {
                    'auditivo': 'assets/audio/1/intr_Eco.mpeg',
                    'visual': 'assets/video/1/intr_Eco1.mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                },
                'historia_antigua': {
                    'auditivo': 'assets/audio/1/historia_antigua.mepg',
                    'visual': 'assets/video/1/La Edad Antigua _ Vídeos Educativos para Niños(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'cyt': {
                'introduccion_a_la_biologia': {
                    'auditivo': 'assets/audio/1/¿QUE ES LA BIOLOGÍA_ en minutos(MP3_160K).mp3',
                    'visual': 'assets/video/1/¿QUE ES LA BIOLOGÍA_ en minutos(360P).mp4',
                    'verbal': 'assets/pdf/que es la biologia.pdf',
                    'multimodal': 'assets/pdf/'
                },
            },
            'comu': {
                'tipos_de_texto': {
                    'auditivo': 'assets/audio/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(MP3_160K).mp3',
                    'visual': 'assets/video/1/El texto _ Tipos de textos _ Narrativo_ Descriptivo_ Argumentativo_ Expositivo_ etc(360P)',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'dpcc': {
                'autestima_y_habilidades_sociales': {
                    'auditivo': 'assets/audio/1/Qué son las Habilidades Sociales y cómo desarrollarlas(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué son las Habilidades Sociales y cómo desarrollarlas(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'ept': {
                'Metodo_desing-thinking': {
                    'auditivo': 'assets/audio/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(MP3_160K).mp3',
                    'visual': 'assets/video/1/Qué es el Design Thinking y para qué sirve _ Fases del Design Thinking _ Transforma tu Negocio(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'ing': {
                'presentaciones_y_saludos': {
                    'auditivo': 'assets/audio/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](MP3_160K).mp3',
                    'visual': 'assets/video/1/PRESENTACIONES Y SALUDOS. CONOCIENDO A ALGUIEN - INGLÉS PARA NIÑOS CON MR. PEA [ENGLISH FOR KIDS](360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'mate': {
                'Numeros_enteros': {
                    'auditivo': 'assets/audio/1/NÚMEROS NATURALES Super facil - Para principiantes(MP3_160K).mp3',
                    'visual': 'assets/video/1/NÚMEROS NATURALES Super facil - Para principiantes(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
                }
            },
            'rel': {
                'Historia_de_las_religiones': {
                    'auditivo': 'assets/audio/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(MP3_160K).mp3',
                    'visual': 'assets/video/1/INTRODUCCIÓN A LA HISTORIA DE LAS RELIGIONES _1(360P).mp4',
                    'verbal': 'assets/pdf/',
                    'multimodal': 'assets/pdf/'
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
