# GitHub ve Vercel ile Yayına Alma

## 1. GitHub'da yeni repo oluştur

1. [github.com](https://github.com) → giriş yap
2. Sağ üst **+** → **New repository**
3. **Repository name:** `ersin-guzel-otomotiv` (veya istediğin isim)
4. **Public** seç
5. **Add a README file** işaretleme (zaten projede var)
6. **Create repository** tıkla

## 2. Projeyi GitHub'a gönder

Terminalde proje klasöründe şu komutları çalıştır (GitHub kullanıcı adını ve repo adını kendi bilgilerinle değiştir):

```bash
cd "/Users/ufukguzel/Downloads/ersin-güzel-otomotiv---kurumsal-web-sitesi"

git remote add origin https://github.com/KULLANICI_ADIN/REPO_ADI.git
git branch -M main
git push -u origin main
```

Örnek: Kullanıcı adın `ufukguzel`, repo adı `ersin-guzel-otomotiv` ise:

```bash
git remote add origin https://github.com/ufukguzel/ersin-guzel-otomotiv.git
git branch -M main
git push -u origin main
```

(GitHub şifre yerine Personal Access Token isteyebilir; gerekirse GitHub → Settings → Developer settings → Personal access tokens ile token oluştur.)

## 3. Vercel'e bağla

1. [vercel.com](https://vercel.com) → **Login** (GitHub ile giriş yap)
2. **Add New** → **Project**
3. **Import** kısmında az önce oluşturduğun repo'yu seç (örn. `ersin-guzel-otomotiv`)
4. **Framework Preset:** Vite (otomatik seçilir)
5. **Deploy** tıkla
6. Yayınlandıktan sonra **Settings** → **Domains** ile kendi domain'ini ekleyebilirsin

---

**Not:** Proje klasöründe git zaten başlatıldı ve ilk commit atıldı. Sadece GitHub'da repo oluşturup yukarıdaki `git remote` ve `git push` komutlarını çalıştırman yeterli.
