package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

const PORT = 63920 // Change the port to the last 5 digits of your student ID (NPM/NIM).

func main() {
	fileServer := http.FileServer(http.Dir("menyala"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		serveStaticFile(w, r, "menyala", fileServer)
	})

	http.HandleFunc("/api/login", handleLogin)

	log.Printf("Server running on http://[::1]:%d/...", PORT)
	err := http.ListenAndServe(fmt.Sprintf(":%d", PORT), nil)
	if err != nil {
		log.Fatalf("Error starting the server on port %d: %v", PORT, err)
	}
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var loginRequest struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	err := json.NewDecoder(r.Body).Decode(&loginRequest)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	if loginRequest.Username == "name" && loginRequest.Password == "npm" {
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(map[string]string{"message": "Login successful"})
	} else {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(map[string]string{"message": "Invalid username or password"})
	}
}

func serveStaticFile(w http.ResponseWriter, r *http.Request, baseDir string, fileServer http.Handler) {
	path := strings.TrimPrefix(r.URL.Path, "/")
	fullPath := filepath.Join(baseDir, path)

	fileInfo, err := os.Stat(fullPath)
	if err != nil {
		if os.IsNotExist(err) {
			log.Printf("File does not exist: %s", fullPath)
		} else {
			log.Printf("Error checking file: %s. Error: %v", fullPath, err)
		}
	} else {
		log.Printf("retrieved %d bytes", fileInfo.Size())
	}

	fileServer.ServeHTTP(w, r)
}