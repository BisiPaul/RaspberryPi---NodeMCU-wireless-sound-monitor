import subprocess
import requests

while(1):
    r = requests.get("http://192.168.1.6:80")
    data = r.json()
    print data
    if( data['variables']['ringing'] == 1 ):
        subprocess.call("./SCRIPT_CONTROL.sh",shell=True)
