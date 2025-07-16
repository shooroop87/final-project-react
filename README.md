# SkillSwap 32

## 🛠 Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Проверяем ошибки
npm run lint

#запускаем бекенд
npx json-server --watch db.json --port 3001

#проверяем что билд собрался
npm run build

# Включаем запрет на пуш в ветки
chmod +x .git/hooks/pre-push 

```
🌿 Работа с Git
Правила ветвления:
  - Все новые ветки создаются ТОЛЬКО от dev
  - Прямые пуши в dev запрещены
  - Все изменения попадают в dev через Pull Request

Последовательность:
  1. Сначала переключаемся на dev git checkout dev
  2. Затем обновляем ее (git pull)
  3. Затем отводим свою ветку git checkout -b feat/<номер_задачи>.<Название_задачи>
  4. Пишем код и коммитим
  5. Проверяем линтер npm run lint
  6. Когда дописали код пушим ветку и git push -u origin имя-вашей-ветки
  7. Делаем пул-реквест (кликаем на Pull request в шапке меню на гитхабе, base: dev, compare: ваша_ветка и кликаем на Create pull request) через интерфейс гитхаба и проводим код-ревью

## Структура

src/  
  ├── api/              # методы работы с мок-JSON (axios/fetch) 
  ├── app/              # инициализация, провайдеры, глобальные стили 
  ├── entities/         # модели домена (Skill, User, Request) 
  ├── features/ 
  │    ├── auth/ 
  │    ├── skills/ 
  │    ├── favorites/ 
  │    └── requests/ 
  ├── widgets/          # готовые фич-блоки (SkillCard, FiltersBar) 
  ├── pages/            # главная, профайл, skill, favorites 
  ├── shared/           # все переиспользуемое!
  │    ├── ui/          # атомы/молекулы 
  │    ├── hooks/       # useDebounce, useLocalStorage ... 
  │    └── lib/         # helpers, constants 
  └── index.tsx
  public/ 
  db/  
  ├── skills.json  
  └── users.json