import React, { Component } from 'react';
import { TYPES, ConnectionPool, Request, IResult } from 'mssql';
import { Config, Client, QueryInterface, Select } from 'knex';
import * as knex from 'knex';

//import { Connection } from 'tedious';

export default class DBcnct extends Component {

    private connectToSqlServer = (async (): Promise<void> => {


    })()

    public render() {

        /*
                var config = {
                    user: 'sa',
                    password: 'Not24get',
                    server: `tcp:BDD\SQLEXPRESS,1433`,
                    domain: 'MEGAPRODUCTION',
                    database: 'TheMegaCasting'
                };
          */
        var query: string = `select * from mg_api_contrat`;


        const configA = {
            "dialect": "sqlserver",
            "connection": {
                "host": "tcp:BDD\SQLEXPRESS,1433",
                "user": "sa",
                "password": "Not24get",
                "database": "TheMegaCasting"
            }
        }

        
        console.log(query);
        return (
            <div>{query}</div>
        )
    }


}
