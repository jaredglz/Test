import { test, expect } from '@playwright/test';

test.setTimeout(90000); 
test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx/');
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('iphone');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('link', { name: 'Apple iPhone 16 Pro Max (256 GB) - Titanio del desierto - Distribuidor' }).click();
  await page.getByRole('button', { name: 'Agregar al carrito' }).click();

});


test('Registro en MercadoLibre', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx/');

  const createAccountLink = page.getByRole('link', { name: 'Crea tu cuenta' });
  await expect(createAccountLink).toBeVisible({ timeout: 10000 });
  await createAccountLink.click();
  const addButton = page.getByRole('button', { name: 'Agregar' });
  await expect(addButton).toBeVisible({ timeout: 10000 });
  await addButton.click();
  const emailInput = page.locator('input[name="email"]'); 
  await expect(emailInput).toBeVisible({ timeout: 10000 });
  await emailInput.fill('jaredglzsal@gmail.com');

});

test('test 3', async ({ page }) => {

    await page.goto('https://www.mercadolibre.com.mx/');
      const categoriesButton = page.getByRole('button', { name: 'Categorías' });
    await expect(categoriesButton).toBeVisible({ timeout: 10000 });
    await categoriesButton.click();
      const vehiclesLink = page.getByRole('link', { name: 'Vehículos', exact: true });
    await expect(vehiclesLink).toBeVisible({ timeout: 10000 });
    await vehiclesLink.click();
      await expect(page).toHaveURL(/autos-motos-y-otros#menu=categories/);
      const vehiclesHeader = page.locator('h1', { hasText: 'Autos, motos y otros' });

  });
 test('test 4', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx/');
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('tecnologia');
await page.getByRole('button', { name: 'Buscar' }).click();
await page.getByRole('link', { name: 'Audífonos In-Ear Bluetooth' }).click();
await page.getByTestId('see-more').click();

  }); 


test('test 5', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx/');
  await page.getByRole('link', { name: 'Supermercado', exact: true }).click();
  await page.locator('section').filter({ hasText: 'IMPERDIBLES EN FULL SÚPER' }).getByRole('link').first().click();
  await page.getByLabel('Forzagen, 47 resultados').click();
  await page.getByLabel('Más relevantes').click();
  await page.getByLabel('No contiene lactosa, 25').click();
  await page.getByLabel('Mora azul, 1 resultados').click();
  await page.getByRole('link', { name: 'Forzagen Pre Workout F5 Revamped 315g Sabor Mora Azul', exact: true }).click();
  await page.getByRole('link', { name: 'Ir a la Tienda oficial' }).click();

await page.pause()

}); 

 