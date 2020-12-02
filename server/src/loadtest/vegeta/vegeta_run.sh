#!/bin/bash

cd server/src/loadtest/vegeta/
rm vegeta_report.txt
touch vegeta_report.txt

# small load test
echo "Small Vegeta Attack" >> vegeta_report.txt
vegeta attack -duration=5s -rate=20 -targets=vegeta_attack.list -output=small_attack.bin
vegeta report small_attack.bin >> vegeta_report.txt
vegeta plot -title=Small_Attack_Results small_attack.bin > graph_small.html
echo "

" >> vegeta_report.txt

# medium load test
echo "Vegeta Attack" >> vegeta_report.txt
vegeta attack -duration=20s -rate=80 -targets=vegeta_attack.list -output=medium_attack.bin
vegeta report medium_attack.bin >> vegeta_report.txt
vegeta plot -title=Attack_Results medium_attack.bin > graph_medium.html
echo "

" >> vegeta_report.txt

# big load test
echo "Big Vegeta Attack" >> vegeta_report.txt
vegeta attack -duration=30s -rate=150 -targets=vegeta_attack.list -output=big_attack.bin
vegeta report big_attack.bin >> vegeta_report.txt
vegeta plot -title=Attack_Results big_attack.bin > graph_big.html

rm small_attack.bin
rm medium_attack.bin
rm big_attack.bin

cd ../../../..