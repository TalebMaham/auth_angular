import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Tableau d'utilisateurs où chaque utilisateur est un objet avec `username` et `password`
  private users = [
    { username: 'sidi', password: 'sidipassword' },
    { username: 'didi', password: 'didipassword' }
  ];

  // Méthode d'authentification
  login(username: string, password: string): { success: boolean, message: string } {
    const user = this.users.find(user => user.username === username);

    // Vérifier si l'utilisateur existe
    if (!user) {
      return { success: false, message: 'Utilisateur non trouvé' };
    }

    // Vérifier si le mot de passe est correct
    if (user.password === password) {
      return { success: true, message: 'Connexion réussie' };
    } else {
      return { success: false, message: 'Mot de passe incorrect' };
    }
  }

  // Méthode pour enregistrer un nouvel utilisateur
  register(username: string, password: string): { success: boolean, message: string } {
    const userExists = this.users.some(user => user.username === username);

    if (userExists) {
      return { success: false, message: 'Utilisateur déjà existant' };
    }

    this.users.push({ username, password });
    return { success: true, message: 'Utilisateur enregistré avec succès' };
  }
}
