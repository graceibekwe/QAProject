package ProjectTest;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ProjectTest {

WebDriver driver;
	
	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "/Users/graceibekwe/Downloads/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@Test
	public void test1() throws InterruptedException {
		driver.get("file:///Users/graceibekwe/Documents/GitHub/QAProject/Individual%20Project/properties.html"); 
		WebElement properties = driver.findElement(By.xpath("/html/body/div[1]/div/div/a[1]"));
		properties.click();
		
		//update listing 3
		WebElement listing = driver.findElement(By.xpath("//*[@id=\"output\"]/div[3]/div/img"));
		listing.click();
		WebElement hold = driver.findElement(By.xpath("//*[@id=\"Hold\"]"));
		hold.clear();
		hold.sendKeys("lease");
		Thread.sleep(2000);
		WebElement update = driver.findElement(By.xpath("//*[@id=\"update\"]"));
		update.click();
		
		
		//add new applicant, id will be 6 now
		WebElement applicants = driver.findElement(By.xpath("/html/body/div[1]/div/div/a[2]"));
		applicants.click();
		WebElement addApp = driver.findElement(By.xpath("//*[@id=\"add\"]/a"));
		addApp.click();
		WebElement name = driver.findElement(By.xpath("//*[@id=\"Name\"]"));
		name.sendKeys("Grace Campbell");
		WebElement number = driver.findElement(By.xpath("//*[@id=\"Number\"]"));
		number.sendKeys("07564389069");
		WebElement budget = driver.findElement(By.xpath("//*[@id=\"Budget\"]"));
		budget.sendKeys("1750000");
		Thread.sleep(2000);
		WebElement register = driver.findElement(By.xpath("//*[@id=\"addapp\"]"));
		register.click();
		
		//create new viewing using new listing and applicant
		WebElement viewings = driver.findElement(By.xpath("/html/body/div[1]/div/div/a[3]"));
		viewings.click();
		WebElement addView = driver.findElement(By.xpath("//*[@id=\"add\"]/a"));
		addView.click();
		WebElement date = driver.findElement(By.xpath("//*[@id=\"Date\"]"));
		date.sendKeys("13/01/2020");
		WebElement app = driver.findElement(By.xpath("//*[@id=\"Applicant\"]"));
		app.sendKeys("6");
		WebElement list = driver.findElement(By.xpath("//*[@id=\"Property\"]"));
		list.sendKeys("3");
		Thread.sleep(2000);
		WebElement save = driver.findElement(By.xpath("//*[@id=\"add\"]"));
		save.click();
		
		Thread.sleep(2000);
		
		//check new listing was made
		WebElement viewings2 = driver.findElement(By.xpath("/html/body/div[1]/div/div/a[3]"));
		viewings2.click();
		Thread.sleep(2000);
		WebElement viewingAddress = driver.findElement(By.xpath("//*[@id=\"output\"]/div[3]/h3[1]"));
		WebElement viewingApplicant = driver.findElement(By.xpath("//*[@id=\"output\"]/div[3]/p[1]"));
		WebElement viewingDate = driver.findElement(By.xpath("//*[@id=\"output\"]/div[3]/p[2]"));
		
		Thread.sleep(2000);
		
		
		boolean passed = false;
		
		if ( viewingAddress.getText().equals("7 Walm Lane") 
				&& viewingApplicant.getText().equals("Grace Campbell") 
				&& viewingDate.getText().equals("13/01/2020") ) {
			passed = true;
		}
		
		
		assertEquals("Viewing address has not come back", true, passed);
		
	}
	
	@After 
	public void teardown() {
		driver.close();
	}
	
}
