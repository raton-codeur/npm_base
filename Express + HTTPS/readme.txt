on a juste :
	- rajouté cert.pem, key.pem
	- modifié server.js

cert.pem et key.pem sont adaptés à ma CA locale

générer de nouveaux cert.pem et key.pem
	shell
		mkcert -key-file key.pem -cert-file cert.pem localhost 127.0.0.1 ::1

installer mkcert
	brew install mkcert

installer une CA locale
	mkcert -install
