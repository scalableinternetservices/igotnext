#!/bin/bash

cd server/src/loadtest/vegeta/
rm vegeta_report.txt
touch vegeta_report.txt

duration=3s
rate=100

# Attack Court Mutation
echo "Vegeta Attack Mutation Courts" >> vegeta_report.txt
vegeta attack -duration=$duration -rate=$rate -targets=vegeta_attack_mutation_courts.list -output=attack_1.bin
vegeta report attack_1.bin >> vegeta_report.txt
vegeta plot -title=Attack_Mutation_Courts attack_1.bin > graph_mutation_courts.html
echo "

" >> vegeta_report.txt

# Attack Game Mutation
echo "Vegeta Attack Mutation Games" >> vegeta_report.txt
vegeta attack -duration=$duration -rate=$rate -targets=vegeta_attack_mutation_games.list -output=attack_1.bin
vegeta report attack_1.bin >> vegeta_report.txt
vegeta plot -title=Attack_Mutation_Games attack_1.bin > graph_mutation_games.html
echo "

" >> vegeta_report.txt

# Attack CourtKind Query
echo "Vegeta Attack Query CourtKind" >> vegeta_report.txt
vegeta attack -duration=$duration -rate=$rate -targets=vegeta_attack_query_courtkind.list -output=attack_1.bin
vegeta report attack_1.bin >> vegeta_report.txt
vegeta plot -title=Attack_Query_CourtKind attack_1.bin > graph_query_courtkind.html
echo "

" >> vegeta_report.txt

# Attack Games Query
echo "Vegeta Attack Query Games" >> vegeta_report.txt
vegeta attack -duration=$duration -rate=$rate -targets=vegeta_attack_query_games.list -output=attack_1.bin
vegeta report attack_1.bin >> vegeta_report.txt
vegeta plot -title=Attack_Query_Games attack_1.bin > graph_query_games.html
echo "

" >> vegeta_report.txt

# Attack ParkInd Query
echo "Vegeta Attack Query ParkInd" >> vegeta_report.txt
vegeta attack -duration=$duration -rate=$rate -targets=vegeta_attack_query_parkind.list -output=attack_1.bin
vegeta report attack_1.bin >> vegeta_report.txt
vegeta plot -title=Attack_Query_ParkInd attack_1.bin > graph_query_parkind.html
echo "

" >> vegeta_report.txt

# Attack ParkQ Query
echo "Vegeta Attack Query ParkQ" >> vegeta_report.txt
vegeta attack -duration=$duration -rate=$rate -targets=vegeta_attack_query_parkq.list -output=attack_1.bin
vegeta report attack_1.bin >> vegeta_report.txt
vegeta plot -title=Attack_Query_ParkQ attack_1.bin > graph_query_parkq.html
echo "

" >> vegeta_report.txt

# Attack Endpoints
echo "Vegeta Attack Endpoints" >> vegeta_report.txt
vegeta attack -duration=$duration -rate=$rate -targets=vegeta_attack_endpoints.list -output=attack_1.bin
vegeta report attack_1.bin >> vegeta_report.txt
vegeta plot -title=Attack_Endpoints_Results attack_1.bin > graph_endpoints.html
echo "

" >> vegeta_report.txt

# Clean Up
rm attack_1.bin
cd ../../../..