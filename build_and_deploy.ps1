$lines = Get-Content ..\secrets\secrets.env
foreach ($line in $lines) {
    $a,$b = $line.split('=')
    Set-Variable $a $b
}

Remove-Item -Recurse -Force .\dist -ErrorAction Ignore
ng build --prod

plink -l ${ipinterative_user} -pw ${ipinteractive_ssh_passphrase} -i ..\secrets\ipinteractive.ppk ${ipinterative_ip} rm -rf ~${ipinterative_user}/build_temp_my_home_web
plink -l ${ipinterative_user} -pw ${ipinteractive_ssh_passphrase} -i ..\secrets\ipinteractive.ppk ${ipinterative_ip} mkdir ~${ipinterative_user}/build_temp_my_home_web

# copy to server
pscp -scp -r -l ${ipinterative_user} -pw ${ipinteractive_ssh_passphrase} -i ..\secrets\ipinteractive.ppk dist ${ipinterative_ip}:~${ipinterative_user}/build_temp_my_home_web
pscp -scp -l ${ipinterative_user} -pw ${ipinteractive_ssh_passphrase} -i ..\secrets\ipinteractive.ppk Docker/Dockerfile ${ipinterative_ip}:~${ipinterative_user}/build_temp_my_home_web/.
pscp -scp -l ${ipinterative_user} -pw ${ipinteractive_ssh_passphrase} -i ..\secrets\ipinteractive.ppk Docker/build.sh ${ipinterative_ip}:~${ipinterative_user}/build_temp_my_home_web/.

# execute remote commands
plink -l ${ipinterative_user} -pw ${ipinteractive_ssh_passphrase} -i ..\secrets\ipinteractive.ppk ${ipinterative_ip} chmod 700 ~${ipinterative_user}/build_temp_my_home_web/build.sh
plink -l ${ipinterative_user} -pw ${ipinteractive_ssh_passphrase} -i ..\secrets\ipinteractive.ppk ${ipinterative_ip} ~${ipinterative_user}/build_temp_my_home_web/build.sh
