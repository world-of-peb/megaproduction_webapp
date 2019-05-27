import { number } from "prop-types";

export interface casting {
    id: number,
    libelle: string,
    adresse?: string,
    date_debut?: any,
    date_fin?: any,
    email: string,
    telephone: number,
    description: string,
    localisation?: string,
    id_client_id?: number,
    id_salarie_id?: number,

    client?: client ,
    listOffre: offre[],
}

export interface miniCasting {
    id: number,
    libelle: string,
    description: string
}

export interface client {
    id?: number,
    libelle?: string,
    adresse?: string,
    email?: string,
    ref?: number,
    telephone?: number}

export interface offre {
    id?: number,
    libelle?: string,
    description?: string,
    nombre_postes?: number,
    id_casting_id?: number,
    id_contrat_id?: number,
    id_metier_id?: number,
    contrat?: contrat,
    metier?: metier,
}

export interface contrat{
    id?: number,
    libelle?: string, 
}

export interface metier {
    id?: number,
    libelle?: string,
    description?: string,
    id_domaine_id?: number,

    domaine?: domaine,
}

export interface domaine {
    id?: number,
    libelle?: string,
    description?: string,
}

